const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbconnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, connectionParams)
    .then(() => {
      console.log("Connected to database MyKicks-Cluster");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = dbconnect;
