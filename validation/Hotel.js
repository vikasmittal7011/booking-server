import { check } from "express-validator";

const createHotelValiation = [
  check("name").not().isEmpty().withMessage("Enter name correctly"),
  check("discription").not().isEmpty().withMessage("Enter discription correctly"),
  check("extraInfo").not().isEmpty().withMessage("Enter extraInfo correctly"),
  check("addressLine").not().isEmpty().withMessage("Enter addressLine correctly"),
  check("state").not().isEmpty().withMessage("Enter state correctly"),
  check("pin").not().isEmpty().withMessage("Enter pin correctly"),
  check("country").not().isEmpty().withMessage("Enter country correctly"),
  check("adultCount").not().isEmpty().withMessage("Enter adult count correctly"),
  check("childCount").not().isEmpty().withMessage("Enter child count correctly"),
  check("star").not().isEmpty().isLength({ min: 1, max: 5 }).withMessage("Enter star correctly"),
  check("type").not().isEmpty().withMessage("Enter type correctly"),
  check("basePrice").not().isEmpty().withMessage("Enter price correctly"),
  check("mapLocation").not().isEmpty().withMessage("Enter map location correctly"),
];

export default createHotelValiation
