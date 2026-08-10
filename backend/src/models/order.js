import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    priceAtPurchase: {
        type: Number,
        required: true,
        min: 0
    }

}, { _id: false });


const shippingAddressSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },

    state: {
        type: String,
        required: true,
        trim: true
    },

    pincode: {
        type: String,
        required: true,
        trim: true
    },

    country: {
        type: String,
        required: true,
        trim: true
    }

}, { _id: false });


const orderSchema = new mongoose.Schema({

    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: {
        type: [orderItemSchema],
        required: true,
        validate: {
            validator: function(items) {
                return items.length > 0;
            },
            message: "Order must contain at least one item."
        }
    },

    shippingAddress: {
        type: shippingAddressSchema,
        required: true
    },

    subtotal: {
        type: Number,
        required: true,
        min: 0
    },

    discount: {
        type: Number,
        default: 0,
        min: 0
    },

    shippingCharge: {
        type: Number,
        default: 0,
        min: 0
    },

    tax: {
        type: Number,
        default: 0,
        min: 0
    },

    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },

    paymentStatus: {
        type: String,
        enum: [
            "Pending",
            "Paid",
            "Failed",
            "Refunded"
        ],
        default: "Pending"
    },

    orderStatus: {
        type: String,
        enum: [
            "Placed",
            "Packed",
            "Shipped",
            "Delivered",
            "Cancelled"
        ],
        default: "Placed"
    }

}, { timestamps: true });


export const Order = mongoose.model(
    "Order",
    orderSchema
);