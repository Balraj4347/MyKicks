const express = require("express");
const router = express.Router();

const userDetails = require("../controllers/userController");

router.route("/userdetails").post(userDetails);
module.exports = router;
