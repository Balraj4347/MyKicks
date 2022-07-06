const User = require("../models/userModel");
// import { useParams } from "react-router-dom";
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const crypto = require("crypto");

// Register User
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, gender, password, avatar } = req.body;

  const user = await User.create({
    name,
    email,
    gender,
    password,
    avatar: {
      url: avatar.url,
    },
  });

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email And Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 201, res);
});

//logout user
exports.logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
// Get User Details
exports.getUserDetails = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("user Not Found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});
