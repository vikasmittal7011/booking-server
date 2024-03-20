import { Schema, model } from "mongoose";
const { ObjectId } = Schema;

const HotelBookSechema = Schema(
    {
        checkIn: { type: String, required: true, },
        checkOut: { type: String, required: true, },
        adultCount: { type: Number, required: true, },
        childCount: { type: Number, required: true, },
        price: { type: Number, required: true, },
        hotel: { type: ObjectId, required: true, ref: "Hotel", },
        user: { type: ObjectId, required: true, ref: "User", },
    },
    { timestamps: true }
);

HotelBookSechema.virtual("id").get(function () {
    return this._id.toHexString();
});

HotelBookSechema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

export const HotelBook = model("Booking", HotelBookSechema);
