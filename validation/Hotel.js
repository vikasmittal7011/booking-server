import { check } from "express-validator";

const createHotelValiation = [
  check("title").not().isEmpty().withMessage("Enter name correctly"),
  check("discription").not().isEmpty().withMessage("Enter discription correctly"),
  check("extraInfo").not().isEmpty().withMessage("Enter extraInfo correctly"),
  check("price").not().isEmpty().withMessage("Enter price correctly"),
  check("maxGuests").not().isEmpty().withMessage("Enter maxGuests correctly"),
  check("checkIn").not().isEmpty().withMessage("Enter checkIn correctly"),
  check("checkOut").not().isEmpty().withMessage("Enter checkOut correctly"),
  check("street").not().isEmpty().withMessage("Enter street correctly"),
  check("city").not().isEmpty().withMessage("Enter city correctly"),
  check("state").not().isEmpty().withMessage("Enter state correctly"),
  check("pin").not().isEmpty().withMessage("Enter pin correctly"),
  check("country").not().isEmpty().withMessage("Enter country correctly"),
];

export default createHotelValiation
