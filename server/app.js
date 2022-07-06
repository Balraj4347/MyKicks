const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", orderRoute);

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;
