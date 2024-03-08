import { Schema, model } from "mongoose";
const { ObjectId } = Schema

const HotelBookSechema = Schema(
    {
        checkInDate: { type: String, required: true, },
        checkOutDate: { type: String, required: true, },
        numberOfGuest: { type: Number, required: true, },
        contact: { type: Number, required: true, },
        price: { type: Number, required: true, },
        hotel: { type: ObjectId, required: true, ref: "Hotel", },
        user: { type: ObjectId, required: true, ref: "User", },
        paymentMethod: { type: String, required: true },
        paymentDone: { type: Boolean, default: false }
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
