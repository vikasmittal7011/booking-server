import { createHmac } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

import { HotelBook } from "../models/HotelBook.js";
import { instance } from "../utils/razorPayInstance.js";

export const getBooks = async (req, res, next) => {
  try {

    const booking = await HotelBook.find().sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}

export const getHotelBookByUser = async (req, res) => {
  try {
    const { id } = req.userData
    const book = await HotelBook.find({ user: id }).sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking: book })

  } catch (error) {
    return res.json({ message: "Internal Server Error" })
  }
}

export const createPayment = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.totalAmount * 100),
      currency: "INR",
    };
    const data = await instance.orders.create(options);

    res.json({ data, success: true, key: process.env.RAZOR_PAY_KEY })

  } catch (error) {
    return res.json({ message: error.message })
  }
}

export const completePayment = async (req, res) => {
  try {
    let {
      checkIn, checkOut, hotel, adultCount, childCount, price
    } = req.query;
    const id = req.userData.id

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature
    } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedsignature = createHmac("sha256", process.env.RAZOR_PAY_SECRET).update(body.toString()).digest("hex")

    const isAuth = expectedsignature === razorpay_signature

    if (isAuth) {
      const newBooking = {
        checkIn,
        checkOut,
        hotel,
        user: id,
        price: +price,
        childCount: +childCount || 0,
        adultCount: +adultCount
      };
      const booking = await HotelBook.create(newBooking)

      if (!booking) {
        return res.redirect("http://localhost:3000/failer/" + "Booking can't be done, plase try again lagter!!")
      }

      return res.redirect("http://localhost:3000/confirm/" + booking.id)

    } else {
      return res.redirect("http://localhost:3000/failer/" + "Booking can't be done, plase try again lagter!!")
    }

  } catch (error) {
    return res.redirect("http://localhost:3000/failer/" + error.message)
  }
}