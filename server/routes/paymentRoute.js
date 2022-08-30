const express = require("express");
const {
  sendStripeApiKey,
  processPayment,
  sendEmailJsKeys,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
//ad-hoc implementation emailjs keys for footer form
router.route("/emailjskeys").get(sendEmailJsKeys);

module.exports = router;
