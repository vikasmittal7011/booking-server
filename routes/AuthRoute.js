import { Router } from "express";
import { loginUser, createUser, resetPasswordRequest, resetPassword, sendOtp, logoutUser } from "../controller/Auth.js";
import createUserValiation from "../validation/Auth.js";

const router = Router();

router
  .post("/", createUserValiation, createUser)
  .post("/otp", sendOtp)
  .post("/login", loginUser)
  .post("/logout", logoutUser)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword);

export default router;
