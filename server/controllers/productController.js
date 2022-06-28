const Product = require("../models/productModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const FilterFeatures = require("../utils/filterfeatures");

//Get ALL Products
getAllProducts = asyncErrorHandler(async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const filterFeature = new FilterFeatures(Product.find(), req.query).filter();
  let products = await filterFeature.query;
  let filterredProductCount = products.length;

  // const products = await Product.find();

  res.status(200).json({
    success: true,
    productCount,
    filterredProductCount,
    products,
  });
});

//Get Single Product Details
getProductDetails = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
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

module.exports = { getAllProducts, createProduct, getProductDetails };
