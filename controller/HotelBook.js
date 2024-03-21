import { createHmac } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

import { instance } from "../utils/razorPayInstance.js";
import { Hotel } from '../models/Hotel.js';

export const getHotelBookByUser = async (req, res) => {
  try {
    const { id } = req.userData
    const bookings = await Hotel.find({ "bookings.user": id })

    const results = bookings.map((book) => {
      const userBookings = book.bookings.filter(
        (booking) => {
          console.log(booking.user.toString(), req.userData.id)
          return booking.user.toString() === req.userData.id
        }
      );

      const hotelWithUserBookings = {
        ...book.toObject(),
        bookings: userBookings,
      };

      return hotelWithUserBookings;
    });

    res.json({ success: true, booking: results })

  } catch (error) {
    console.log(error)
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
    const id = req.userData.id;

    let bookingHotel = await Hotel.findOne({ _id: hotel });

    if (!bookingHotel) {
      return res.redirect("http://localhost:3000/failer/" + "Hotel Not Found.")
    }

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

      await bookingHotel.bookings.unshift(newBooking)

      await bookingHotel.save()

      return res.redirect("http://localhost:3000/confirm/" + bookingHotel.id)

    } else {
      return res.redirect("http://localhost:3000/failer/" + "Booking can't be done, plase try again lagter!!")
    }

  } catch (error) {
    return res.redirect("http://localhost:3000/failer/" + error.message)
  }
}