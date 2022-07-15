const Product = require("../models/productModel");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const FilterFeatures = require("../utils/filterfeatures");

//Get ALL Products with Filter
exports.getAllProducts = asyncErrorHandler(async (req, res, next) => {
  const productsCount = await Product.countDocuments();

  const filterFeature = new FilterFeatures(
    Product.find().sort({ createdAt: -1 }),
    req.query
  ).filter();
  let products = await filterFeature.query;
  let filteredProductCount = products.length;

  // const products = await Product.find();

  res.status(200).json({
    success: true,
    productsCount,
    filteredProductCount,
    products,
  });
});

//Get Single Product Details
exports.getProductDetails = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// ** ------  ADMIN controllers ------ **

//Create Product
exports.createProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getAdminProducts = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find();
  const productCount = await Product.countDocuments();
  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

//update product
exports.updateProduct = asyncErrorHandler(async (req, res, next) => {
  // let product = await Product.findById(req.params.id);

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    product,
  });
});

//delete product
exports.deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.remove();

  res.status(201).json({
    success: true,
  });
});
