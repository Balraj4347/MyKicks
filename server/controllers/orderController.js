const Order = require("../models/orderModel");

const getOrderDetails = async (req, res, next) => {
  try {
    const data = req.body;
    const order = await Order.create(data);
    console.log(order);
    res.json({
      success: true,
      order,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = getOrderDetails;
