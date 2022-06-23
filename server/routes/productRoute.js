const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

router.route("/getproducts").get(getProducts);
router.route("/createproduct").post(createProduct);

module.exports = router;
