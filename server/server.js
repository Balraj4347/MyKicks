const app = require("./app");

//required package import
const dotenv = require("dotenv");
const morgan = require("morgan");

//importing for database connection
const dbconnect = require("./config/database");

// ----- config for dotenv --------
dotenv.config({
  path: "server/config/config.env",
});
//using morgan to get http logging in console for easy debug
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

dbconnect();

app.get("/", (req, res) => {
  res.send("API Running....");
});

const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`Service Running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
