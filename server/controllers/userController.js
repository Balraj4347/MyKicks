const User = require("../models/userModel");
// import { useParams } from "react-router-dom";
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const cloudinary = require("cloudinary");
const crypto = require("crypto");

// Register User
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(
    req.body.avatar,
    // req.files.avatar.tempFilePath,
    {
      folder: "MyKicks/Avatars",
      width: 150,
      crop: "scale",
    },
    function (error, result) {
      console.log(result, error);
    }
  );

  const { name, email, gender, password } = req.body;

  const user = await User.create({
    name,
    email,
    gender,
    password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Please Enter Email And Password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
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
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// ** --- Admin Controller --**

exports.getAllUsers = asyncErrorHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getSingleUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

exports.updateUserRole = asyncErrorHandler(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

exports.deleteUser = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
  });
});
