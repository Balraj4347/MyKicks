const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const productRoute = require("./routes/productRoute");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", productRoute);

module.exports = app;