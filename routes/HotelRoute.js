const express = require("express");
const { createHotelValiation } = require("../validation/Hotel");
const { createHotel, getHotels, getHotel, updateHotel, deleteHotel } = require("../controller/Hotel");
const adminAuth = require("../middleware/adminAuth")

const router = express.Router();

router.get("/", getHotels)
    .get("/:id", getHotel)
    .post("/", adminAuth, createHotelValiation, createHotel)
    .post("/update", adminAuth, createHotelValiation, updateHotel)
    .delete("/:id", adminAuth, deleteHotel);

module.exports = router;
