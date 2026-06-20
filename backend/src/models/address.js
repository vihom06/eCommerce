import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },


  addressType: {
    type: String,
    enum: ["Home", "Office", "Other"],
    default: "Home"
  },


  fullName: {
    type: String,
    required: true,
    trim: true
  },


  phone: {
    type: String,
    required: true
  },


  building: {
    type: String,
    required: true,
    trim: true
  },


  area: {
    type: String,
    required: true,
    trim: true
  },


    city: {
    type: String,
    required: true
  },


  state: {
    type: String,
    required: true
  },


  pincode: {
    type: String,
    required: true
  },


  country: {
    type: String,
    default: "India"
  },


  isDefault: {
    type: Boolean,
    default: false
  }


}, { timestamps: true });


export const Address =
  mongoose.model("Address", addressSchema);