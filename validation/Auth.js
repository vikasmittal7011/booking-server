import { check } from "express-validator";

const createUserValiation = [
  check("name").not().isEmpty().withMessage("Enter name correctly"),
  check("email").normalizeEmail().isEmail().withMessage("Enter valid email"),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Password must be above 4 char"),
];

export default createUserValiation