const express = require("express");
const {
  sendStripeApiKey,
  processPayment,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
