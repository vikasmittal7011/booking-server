const { HotelBook } = require("../models/HotelBook");
const { instance } = require("../utils/razorPayInstance ");
const crypto = require('crypto');

exports.createHotelBook = async (req, res) => {

  let {
    contact, checkIn, checkOut, guest, hotel, totalAmount, paymentMethod
  } = req.body;

  const id = req.userData.id

  try {
    const newHotel = {
      contact,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuest: +guest,
      hotel,
      user: id,
      price: +totalAmount,
      paymentMethod
    };


    const booking = await HotelBook.create(newHotel)

    if (!booking) {
      return res.json({ message: "Booking can't be done, plase try again lagter!!" })
    }

    res.json({
      success: true, booking
    })


  } catch (err) {
    return res.json({ message: err.message })
  }
};

exports.getBooks = async (req, res, next) => {
  try {

    const booking = await HotelBook.find().sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}

exports.getHotelBookByUser = async (req, res, next) => {
  try {
    const { id } = req.userData
    const book = await HotelBook.find({ user: id }).sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking: book })

  } catch (error) {
    return res.json({ message: "Internal Server Error" })
  }
}

exports.createPayment = async (req, res) => {
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

exports.completePayment = async (req, res) => {
  let {
    contact, checkIn, checkOut, guest, hotel, totalAmount, paymentMethod
  } = req.query;
  const id = req.userData.id

  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature
    } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedsignature = crypto.createHmac("sha256", process.env.RAZOR_PAY_SECRET).update(body.toString()).digest("hex")

    const isAuth = expectedsignature === razorpay_signature

    if (isAuth) {

      const newHotel = {
        contact,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        numberOfGuest: +guest,
        hotel,
        user: id,
        price: +totalAmount,
        paymentMethod,
        paymentDone: true
      };

      const booking = await HotelBook.create(newHotel)

      if (!booking) {
        return res.redirect("http://localhost:3000/booking-failer/" + "Booking can't be done, plase try again lagter!!")
      }

      return res.redirect("http://localhost:3000/booking-confirm/" + booking.id)

    } else {
      return res.redirect("http://localhost:3000/booking-failer/" + "Booking can't be done, plase try again lagter!!")
    }

  } catch (error) {
    return res.json({ message: error.message })
  }
}