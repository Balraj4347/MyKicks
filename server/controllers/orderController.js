const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");

exports.newOrder = asyncErrorHandler(async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo, totalPrice } = req.body;

  // const orderExist = await Order.findOne({ paymentInfo });

  // if (orderExist) {
  //   return next(new ErrorHandler("Order Already Placed", 400));
  // }

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

exports.getSingleOrderDetails = asyncErrorHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order Not Found", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.myOrders = asyncErrorHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  if (!orders) {
    return next(new ErrorHandler("Order Not Found", 404));
  }

  res.status(200).json({
    success: true,
    orders,
  });
});

// const getOrderDetails = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const order = await Order.create(data);
//     console.log(order);
//     res.json({
//       success: true,
//       order,
//     });
//   } catch (err) {
//     console.log(err);
//     res.json(err);
//   }
// };
