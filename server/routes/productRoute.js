const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/productController");

router.route("/createproduct").post(createProduct);
module.exports = router;
