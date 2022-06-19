const e = require("express");
const Product = require("../models/productModel");

//Creating Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    if (product)
      res.json({
        success: true,
        data: product,
      });
    else {
      res.json({
        success: false,
        message: " UnSuccessful",
      });
    }
  } catch (err) {
    console.log("createProduct controller", err);
    res.json(err);
  }
};
module.exports = createProduct;
