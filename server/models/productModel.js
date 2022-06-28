const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  brand: {
    type: String,
    uppercase: true,
    required: true,
  },

  images: [
    {
      url: {
        type: String,
        required: true,
      },
      _id: false,
    },
  ],

  category: {
    type: String,
    enum: ["Footwear", "Accessories"],
    required: true,
  },

  gender: {
    type: String,
    enum: ["Men", "Women"],
  },
  stock: {
    type: Number,
    required: true,
    default: 1,
  },
  ratings: {
    type: Number,
    default: 0,
    max: 5,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
