import { Schema, model } from "mongoose";

const HotelSehema = Schema(
    {
        title: { type: String, required: true, },
        discription: { type: String, required: true, },
        extraInfo: { type: String, required: true, },
        price: { type: Number, required: true, },
        maxGuests: { type: Number, required: true, },
        checkIn: { type: String, required: true, },
        checkOut: { type: String, required: true, },
        perks: [{ type: String, required: true, }],
        photos: [{ type: String, required: true, }],
        street: { type: String, required: true, },
        city: { type: String, required: true, },
        state: { type: String, required: true, },
        pin: { type: Number, required: true, },
        country: { type: String, required: true, },
    },
    { timestamps: true }
);

HotelSehema.virtual("id").get(function () {
    return this._id.toHexString();
});

HotelSehema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

export const Hotel = model("Hotel", HotelSehema);
