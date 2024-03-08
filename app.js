const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const cloundinary = require("cloudinary");
const cookieparser = require("cookie-parser");


const connection = require("./utils/database");
const app = express();

const Auth = require("./routes/AuthRoute");
const User = require("./routes/UserRoute");
const Hotel = require("./routes/HotelRoute");
const HotelBookRoute = require("./routes/HotelBookRoute");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
    // origin: "https://hotelmanagement-sq75.onrender.com", credentials: true
    origin: "http://localhost:3000", credentials: true
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

cloundinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_PUBLIC,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/auth", Auth);
app.use("/api/user", User);
app.use("/api/hotel", Hotel);
app.use("/api/booking", HotelBookRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});

app.use((req, res, next) => {
  next(new HttpError("Not route found", 404));
});

app.use((error, req, res, next) => {
  if (res.heardersSent) {
    return next(error);
  }
  res
    .status(error.errorCode || 500)
    .json({ message: error.message || "Unknow error accour" || error.message });
});

app.listen(PORT);
