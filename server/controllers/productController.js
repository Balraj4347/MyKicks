const Product = require("../models/productModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const errorHandler = require("../utils/errorHandler");

//Get ALL Products
getProducts = asyncErrorHandler(async (req, res, next) => {
  const productCount = await Product.countDocuments();
  const products = await Product.find();

  res.status(200).json({
    success: true,
    productCount,
    products,
  });
});

//Create Product
createProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json({
    success: true,
    product,
  });
});

// //Creating Product
// const createProduct = asyncErrorHandler(async (req, res) => {
//   const product = await Product.create(req.body);
//   console.log(product);
//   if (product)
//     res.json({
//       success: true,
//       data: product,
//     });
//   else {
//     res.json({
//       success: false,
//       message: " UnSuccessful",
//     });
//   }
// });
module.exports = { getProducts, createProduct };
