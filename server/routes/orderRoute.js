const express = require("express");
const router = express.Router();

const getOrderDetails = require("../controllers/orderController");

router.route("/getorderdetails").post(getOrderDetails);
module.exports = router;
