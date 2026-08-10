import Razorpay from "razorpay";
import crypto from "crypto";

import { Order } from "../models/order.js";
import { Payment } from "../models/payment.js";
import { Product } from "../models/product.js";
import { Cart } from "../models/cart.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// ===================================
// CREATE PAYMENT
// ===================================

const createPayment = asyncHandler(async (req, res) => {

const { orderId, paymentMethod } = req.body;


// Validate input
if (!orderId || !paymentMethod) {
    throw new ApiError(
        400,
        "Order ID and payment method are required"
    );
}


// Find order
const order = await Order.findById(orderId);

if (!order) {
    throw new ApiError(
        404,
        "Order not found"
    );
}


// Check order belongs to buyer
if (!order.buyer.equals(req.user._id)) {
    throw new ApiError(
        403,
        "You are not allowed to pay for this order"
    );
}


// Check if order is already paid
if (order.paymentStatus === "Paid") {
    throw new ApiError(
        400,
        "Order has already been paid"
    );
}


// Check existing payment
let payment = await Payment.findOne({
    order: order._id
});


// If existing payment was successful
if (payment?.status === "Success") {
    throw new ApiError(
        400,
        "Payment has already been completed"
    );
}


// Create new Razorpay order
const razorpayOrder = await razorpay.orders.create({
    amount: Math.round(order.totalAmount * 100),
    currency: "INR",
    receipt: order._id.toString()
});


// Create payment if it does not exist
if (!payment) {

    payment = await Payment.create({
        order: order._id,
        amount: order.totalAmount,
        paymentMethod,
        razorpayOrderId: razorpayOrder.id,
        status: "Pending"
    });

}


// Update existing failed payment
else {

    payment.paymentMethod = paymentMethod;
    payment.razorpayOrderId = razorpayOrder.id;
    payment.transactionId = null;
    payment.status = "Pending";

    await payment.save();

}


return res.status(200).json(
    new ApiResponse(
        200,
        {
            payment,
            razorpayOrder
        },
        "Payment initiated successfully"
    )
);

});


// ===================================
// VERIFY PAYMENT
// ===================================

const verifyPayment = asyncHandler(async (req, res) => {

const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
} = req.body;


// Validate payment data
if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature
) {
    throw new ApiError(
        400,
        "Invalid payment data"
    );
}


// Find payment
const payment = await Payment.findOne({
    razorpayOrderId: razorpay_order_id
});


if (!payment) {
    throw new ApiError(
        404,
        "Payment record not found"
    );
}


// Find order
const order = await Order.findById(
    payment.order
);


if (!order) {
    throw new ApiError(
        404,
        "Order not found"
    );
}


// Check order belongs to logged-in buyer
if (!order.buyer.equals(req.user._id)) {
    throw new ApiError(
        403,
        "You are not allowed to verify this payment"
    );
}


// Create expected signature
const body =
    razorpay_order_id +
    "|" +
    razorpay_payment_id;


const expectedSignature = crypto
    .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
    )
    .update(body)
    .digest("hex");


// Verify signature
if (expectedSignature !== razorpay_signature) {

    payment.status = "Failed";
    await payment.save();

    order.paymentStatus = "Failed";
    await order.save();

    throw new ApiError(
        400,
        "Payment verification failed"
    );
}


// Start transaction
const session = await mongoose.startSession();


try {

    await session.withTransaction(async () => {

        // Update payment
        payment.status = "Success";
        payment.transactionId = razorpay_payment_id;

        await payment.save({
            session
        });


        // Update order
        order.paymentStatus = "Paid";

        await order.save({
            session
        });


        // Reduce product stock
        for (const item of order.items) {

            const product = await Product.findById(
                item.product
            ).session(session);


            if (
                !product ||
                product.stock < item.quantity
            ) {
                throw new ApiError(
                    400,
                    "Product is no longer available in the requested quantity"
                );
            }


            product.stock -= item.quantity;

            await product.save({
                session
            });

        }


        // Find user's cart
        const cart = await Cart.findOne({
            user: order.buyer
        }).session(session);


        // Remove purchased items from cart
        if (cart) {

            const orderedProductIds =
                order.items.map(
                    (item) =>
                        item.product.toString()
                );


            cart.items = cart.items.filter(
                (item) =>
                    !orderedProductIds.includes(
                        item.product.toString()
                    )
            );


            await cart.save({
                session
            });

        }

    });


    return res.status(200).json(
        new ApiResponse(
            200,
            {
                payment,
                order
            },
            "Payment verified successfully"
        )
    );

}

finally {

    await session.endSession();

}

});

export {
    createPayment,
    verifyPayment
};
