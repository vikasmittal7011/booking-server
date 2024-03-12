import { Router } from "express";

import createHotelValiation from "../validation/Hotel.js";
import { createHotel, getHotels, getHotel, updateHotel, deleteHotel, fetchOwnerHotels } from "../controller/Hotel.js";
import adminAuth from "../middleware/adminAuth.js";
import generalAuth from "../middleware/generalAuth.js";

const router = Router();

router.get("/", getHotels)
    .get("/owner/hotels", generalAuth, fetchOwnerHotels)
    .get("/:id", getHotel)
    .post("/", generalAuth, createHotelValiation, createHotel)
    .post("/update", generalAuth, createHotelValiation, updateHotel)
    .delete("/:id", adminAuth, deleteHotel);

export default router;
