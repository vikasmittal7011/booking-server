const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../models/User");
const HttpError = require("../models/http-error");
const transporter = require("../utils/nodemailer");
const userOTPTemplate = require("../utils/userOTPTemplate")
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookies");

const jwt_key = process.env.JWT_TOKEN;
const salt = process.env.SALT;

exports.sendOtp = async (req, res, next) => {
  const { email } = req.body

  const otp = Math.round(Math.random() * 900000) + 100000

  try {
    if (email) {

      const user = await User.findOne({ email: email });
      if (user) {
        return next(
          new HttpError("Email is already exsit, try with different email", 422)
        );
      }

      const info = transporter.sendMail({
        from: {
          name: "Tour & Travals",
          address: "myshop@gmail.com"
        },
        to: email,
        subject: "Otp verification",
        html: userOTPTemplate(otp),
      });

      if (info) {
        res.json({ success: true, otp });
      } else {
        res.json({ message: "Email not send, try again later!!" });
      }

    } else {
      res.json({ message: "Enter a valid email" })
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
}

exports.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 422));
  }
  let user;
  try {
    bcrypt.hash(req.body.password, parseInt(salt)).then(async (pass) => {
      const createUser = { ...req.body, password: pass };
      user = await User.create(createUser);
      const token = generateTokenAndSetCookie(user.id, user.role, res);
      return res.json({
        success: true,
        token,
        user: user,
      });
    });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.loginUser = async (req, res, next) => {
  let { password } = req.body;
  let user, comparePassword, token;
  try {
    user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new HttpError("Enter valid credential", 404));
    }

    comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return next(new HttpError("Enter valid credential", 404));
    }

    token = generateTokenAndSetCookie(user._id, user.role, res);

    res.json({ token, success: true, user: user });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.logoutUser = (req, res, next) => {
  try {
    res.cookie("jwt", "");
    res.json({ message: "Logout successfully", success: true });
  } catch (err) {
    return next(new HttpError(err.message, 500));
  }
};

exports.resetPasswordRequest = async (req, res, next) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email: email });

    if (!user) {
      return next(new HttpError("User is not exist, check your email", 404));
    }

    const token = jwt.sign({ email: email }, jwt_key, { expiresIn: "5m" });

    user.passwordResetToken = token;

    await user.save();

    const info = await transporter.sendMail({
      from: "myshop@gmail.com",
      to: email,
      subject: "Reset Your Password!!",
      html: `<p>Click <a href="https://hotelmanagement-sq75.onrender.com/reset-password?token=${token}">here</a> to reset your password!!</p>`,
    });

    if (info) {
      res.json({ success: true });
    }
    res.json({
      success: false,
      message: "Failed to send email please try again later",
    });
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const tokenValue = jwt.verify(token, process.env.JWT_TOKEN);
    const { email } = tokenValue;
    let user;
    user = await User.findOne({ email: email });
    if (token !== user.passwordResetToken) {
      return next(new HttpError("Bad Request, failed to reset password", 422));
    }
    bcrypt.hash(password, parseInt(salt)).then(async (pass) => {
      user.password = pass;
      user.passwordResetToken = "";
      await user.save();
      return res.json({
        success: true,
      });
    });
  } catch (err) {
    return next(new HttpError(err.message + ". Plase resend request.", 500));
  }
};
