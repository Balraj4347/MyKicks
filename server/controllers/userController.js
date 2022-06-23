const User = require("../models/userModel");

const userDetails = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = await User.create(data);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = userDetails;
