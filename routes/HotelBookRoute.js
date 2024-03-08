const express = require("express");
const userAuth = require("../middleware/userAuth");
const adminAuth = require("../middleware/adminAuth");
const { createHotelBook, getHotelBookByUser, getBooks, createPayment, completePayment } = require("../controller/HotelBook");

const router = express.Router();

router
    .get("/", userAuth, getHotelBookByUser)
    .get("/admin", adminAuth, getBooks)
    .post("/checkout", userAuth, createPayment)
    .post("/paymentverification", userAuth, completePayment)
    .post("/", userAuth, createHotelBook)

module.exports = router;
