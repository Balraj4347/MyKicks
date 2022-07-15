const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const {
  getAllProducts,
  getProductDetails,
  createProduct,
  getAdminProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
module.exports = router;
