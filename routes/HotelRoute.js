import { Router } from "express";

import createHotelValiation from "../validation/Hotel.js";
import { createHotel, getHotels, getHotel, updateHotel, deleteHotel } from "../controller/Hotel.js";
import adminAuth from "../middleware/adminAuth.js";

const router = Router();

router.get("/", getHotels)
    .get("/:id", getHotel)
    .post("/", adminAuth, createHotelValiation, createHotel)
    .post("/update", adminAuth, createHotelValiation, updateHotel)
    .delete("/:id", adminAuth, deleteHotel);

export default router;
