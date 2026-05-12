//Import mongooose library
const mongoose = require("mongoose")

// Define the product schema using the Mongoose Schema constructor
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
},
  { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema)