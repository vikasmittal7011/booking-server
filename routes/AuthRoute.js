const express = require("express");
const {
  loginUser,
  createUser,
  resetPasswordRequest,
  resetPassword,
  sendOtp,
  logoutUser,
} = require("../controller/Auth");
const { createUserValiation } = require("../validation/Auth");

const router = express.Router();

router
  .post("/", createUserValiation, createUser)
  .post("/otp", sendOtp)
  .post("/login", loginUser)
  .post("/logout", logoutUser)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword);

module.exports = router;
