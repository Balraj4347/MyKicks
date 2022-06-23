const app = require("./app");

//importing for database connection
const dbconnect = require("./config/database");

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

dbconnect();

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
