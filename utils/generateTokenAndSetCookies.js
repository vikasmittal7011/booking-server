const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (id, role, res) => {
  try {
    const token = jwt.sign({ id, role }, process.env.JWT_TOKEN, {
      expiresIn: "15d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    return token;
  } catch (err) {
  }
};

module.exports = generateTokenAndSetCookie;
