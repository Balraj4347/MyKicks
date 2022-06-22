const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
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
    name: {
      type: String,
      required: true,
    },
    logo: {
      url: {
        type: String,
        required: true,
      },
    },
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
    required: [true, "Please enter product category"],
  },

  stock: {
    type: Number,
    required: true,
    maxlength: 2,
    default: 1,
  },

  ratings: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
