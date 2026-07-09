import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    images: [{
        type: String
    }],

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }

}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);