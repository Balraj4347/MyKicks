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
    },
  ],

  category: {
    type: String,
    enum: ["Footwear", "Accessories"],
    required: true,
  },

  gender: {
    type: String,
    enum: ["Unisex", "Male", "Female"],
    required: true,
  },

  Acc_stock: {
    type: Number,
    min: 0,
  },
  shoeSize: [
    {
      size: {
        type: Number,
        max: 15,
        min: 6,
      },
      stock: {
        type: Number,
        min: 0,
      },
    },
  ],

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
