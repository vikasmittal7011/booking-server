import { Router } from "express";

import userAuth from "../middleware/userAuth.js";
import { getHotelBookByUser, createPayment, completePayment } from "../controller/HotelBook.js";

const router = Router();

router
    .get("/", userAuth, getHotelBookByUser)
    .post("/checkout", userAuth, createPayment)
    .post("/paymentverification", userAuth, completePayment)

export default router;
