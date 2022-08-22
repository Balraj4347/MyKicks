const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = asyncErrorHandler(async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: (req.body.amount + req.body.shippingCharges) * 100,
      currency: "inr",
      metadata: {
        company: "MyKicks",
        orderAmount: req.body.amount,
        shippingCharges: req.body.shippingCharges,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).json({
      success: true,
      message: "Payment SuccessFul",
      client_secret: myPayment.client_secret,
    });
  } catch (error) {
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

exports.sendStripeApiKey = asyncErrorHandler(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

//ad-hoc implementation emailjs keys for footer form
exports.sendEmailJsKeys = asyncErrorHandler(async (req, res, next) => {
  res.status(200).json({
    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  });
});
