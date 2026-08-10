import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
        unique: true
    },

    amount: {
        type: Number,
        required: true,
        min: 0
    },

    paymentMethod: {
        type: String,
        enum: ["UPI", "Card", "NetBanking"],
        required: true
    },

    razorpayOrderId: {
        type: String,
        required: true
    },

    transactionId: {
        type: String,
        default: null
    },

    status: {
        type: String,
        enum: ["Pending", "Success", "Failed"],
        default: "Pending"
    }

}, { timestamps: true });


export const Payment = mongoose.model(
    "Payment",
    paymentSchema
);