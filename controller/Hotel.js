import { uploader } from "cloudinary";
import { validationResult } from "express-validator";

import HttpError from "../models/http-error.js";
import { Hotel } from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  console.log(req.userData.id)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.json({ message: errorMessages })
  }

  let {
    images,
    name,
    discription,
    extraInfo,
    street,
    city,
    state,
    pin,
    country,
    perks,
    adultCount,
    childCount,
    star,
    type,
    basePrice,
    discount,
    mapLocation,
  } = req.body;

  try {

    let uploadPromises = images.map(async (image) => {
      const cloudinaryResponse = await uploader.upload(image);
      return cloudinaryResponse.secure_url;
    });

    const price = Math.round(
      +basePrice * (1 - +discount / 100)
    );

    const uploadedImages = await Promise.all(uploadPromises);

    if (uploadedImages.length === images.length) {
      const newHotel = {
        owner: req.userData.id,
        name,
        discription,
        extraInfo,
        street,
        city,
        state,
        pin: +pin,
        country,
        photos: uploadedImages,
        perks: perks,
        adultCount: +adultCount,
        childCount: +childCount,
        star,
        type,
        mapLocation,
        basePrice: +basePrice,
        discount: +discount,
        discountedPrice: price
      };


      const hotel = await Hotel.create(newHotel)

      if (!hotel) {
        return res.json({ message: "Hotel can't be add, plase try again lagter!!" })
      }

      res.json({
        success: true, hotel
      })
    }

  } catch (err) {
    console.log(err)
    return res.json({ message: err.message });
  }
}

export const getHotels = async (req, res, next) => {
  try {
    const conditions = {};
    let query = Hotel.find(conditions);
    let totalHotelQuery = Hotel.find(conditions);

    if (req.query.title) {
      query = query.find({ title: { $regex: req.query.title, $options: "i" } });
      totalHotelQuery = Hotel.find({ title: { $regex: req.query.title, $options: "i" } });
    }

    if (req.query.location) {
      const locationRegex = new RegExp(req.query.location, 'i');
      query = query.find({
        $or: [
          { street: { $regex: locationRegex } },
          { city: { $regex: locationRegex } },
          { state: { $regex: locationRegex } },
          { country: { $regex: locationRegex } }
        ]
      });
      totalHotelQuery = Hotel.find({
        $or: [
          { street: { $regex: locationRegex } },
          { city: { $regex: locationRegex } },
          { state: { $regex: locationRegex } },
          { country: { $regex: locationRegex } }
        ]
      });
    }

    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }

    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit);
      const page = parseInt(req.query._page);
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    const [docs, totalDocs] = await Promise.all([
      query.exec(),
      totalHotelQuery.countDocuments()
    ]);

    res.set("X-Total-Count", totalDocs);
    res.json({ success: true, hotels: docs });

  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
}

export const getHotel = async (req, res, next) => {
  try {
    const { id } = req.params
    const hotel = await Hotel.findById({ _id: id })

    if (!hotel) {
      return next(new HttpError("Hotel not found", 404))
    }

    res.json({ success: true, hotel })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}

export const deleteHotel = async (req, res, next) => {
  try {
    const { id } = req.params
    const hotel = await Hotel.findByIdAndDelete({ _id: id })

    if (!hotel) {
      return res.json({ message: "Hotel not found" })
    }

    res.json({ success: true, hotel })

  } catch (error) {
    return res.json({ message: error.message })
  }
}

export const updateHotel = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 422));
  }

  let {
    images,
    title,
    discription,
    extraInfo,
    price,
    maxGuests,
    checkIn,
    checkOut,
    street,
    city,
    state,
    pin,
    country,
    perk
  } = req.body;
  try {

    let uploadPromises = images.map(async (image) => {
      if (!image.includes("https")) {
        const cloudinaryResponse = await uploader.upload(image);
        return cloudinaryResponse.secure_url;
      } else {
        return image
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);

    const updatedHotel = {
      title,
      discription,
      extraInfo,
      price: +price,
      maxGuests: +maxGuests,
      checkIn,
      checkOut,
      street,
      city,
      state,
      pin: +pin,
      country,
      photos: uploadedImages,
      perks: perk
    };


    const hotel = await Hotel.findByIdAndUpdate({ _id: req.body.id }, updatedHotel, { new: true })

    if (!hotel) {
      return res.json({ message: "Hotel can't be add, plase try again lagter!!" })
    }

    res.json({
      success: true, hotel
    })

  } catch (error) {
    res.json({ message: "Internal Server Error" })
  }
}
