const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", orderRoute);

module.exports = app;
