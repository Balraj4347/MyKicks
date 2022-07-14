const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

const {
  getSingleOrderDetails,
  newOrder,
  myOrders,
} = require("../controllers/orderController");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrderDetails);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

module.exports = router;
