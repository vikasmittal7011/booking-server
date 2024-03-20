import { Schema, model } from "mongoose";
const { ObjectId } = Schema;

const HotelSehema = Schema(
    {
        owner: { type: ObjectId, required: true, ref: "User", },
        name: { type: String, required: true, },
        discription: { type: String, required: true, },
        extraInfo: { type: String, required: true, },
        perks: [{ type: String, required: true, }],
        photos: [{ type: String, required: true, }],
        addressLine: { type: String, required: true, },
        state: { type: String, required: true, },
        country: { type: String, required: true, },
        pin: { type: Number, required: true, },
        adultCount: { type: Number, required: true, default: 1 },
        childCount: { type: Number, required: true, default: 0 },
        star: { type: Number, required: true, default: 0 },
        type: { type: String, required: true, },
        basePrice: { type: Number, required: true, },
        discount: { type: Number, required: true, default: 0 },
        discountedPrice: { type: Number, required: true, },
        mapLocation: { type: String, required: true, },
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
