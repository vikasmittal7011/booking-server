import { Router } from "express";

import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";
import { getHotelBookByUser, getBooks, createPayment, completePayment } from "../controller/HotelBook.js";

const router = Router();

router
    .get("/", userAuth, getHotelBookByUser)
    .get("/admin", adminAuth, getBooks)
    .post("/checkout", userAuth, createPayment)
    .post("/paymentverification", userAuth, completePayment)

export default router;
