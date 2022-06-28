const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductDetails,
  createProduct,
} = require("../controllers/productController");

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);
router.route("/createproduct").post(createProduct);

module.exports = router;
