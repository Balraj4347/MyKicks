const app = require("./app");

const dotenv = require("dotenv");
const { path } = require("./app");

// ----- config for dotenv --------
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Service Running on http://localhost:${process.env.PORT}`);
});
