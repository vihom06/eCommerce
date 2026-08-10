import { Order } from "../models/order.js";
import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";
import { Address } from "../models/address.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


const placeOrder = asyncHandler(async (req, res) => {

    // Authorization -> done by middleware

    const {
        orderType,
        productId,
        quantity,
        shippingAddressId
    } = req.body;


    let order;


    // ===================================
    // BUY NOW
    // ===================================

    if (orderType === "BUY_NOW") {

        // Validate input
        if (!productId || !quantity || !shippingAddressId) {
            throw new ApiError(
                400,
                "Product, quantity and shipping address are required"
            );
        }


        // Find product
        const product = await Product.findById(productId);


        // Check product exists
        if (!product) {
            throw new ApiError(
                404,
                "Product does not exist"
            );
        }


        // Check stock availability
        if (product.stock < quantity) {
            throw new ApiError(
                400,
                "Requested quantity is not available"
            );
        }


        // Find shipping address
        const address = await Address.findById(
            shippingAddressId
        );


        // Check address exists
        if (!address) {
            throw new ApiError(
                404,
                "Shipping address does not exist"
            );
        }


        // Check address belongs to logged-in user
        if (!address.user.equals(req.user._id)) {
            throw new ApiError(
                403,
                "You are not allowed to use this address"
            );
        }


        // Create order items
        const orderItems = [
            {
                product: product._id,
                seller: product.seller,
                quantity,
                priceAtPurchase: product.price
            }
        ];


        // Calculate subtotal
        const subtotal = product.price * quantity;


        // Create order
        order = await Order.create({
            buyer: req.user._id,

            items: orderItems,

            shippingAddress: {
                fullName: address.fullName,
                phone: address.phone,
                building: address.building,
                area: address.area,
                city: address.city,
                state: address.state,
                pincode: address.pincode,
                country: address.country
            },

            subtotal,

            totalAmount: subtotal
        });

    }


    // ===================================
    // CART
    // ===================================

    else if (orderType === "CART") {

        // Validate input
        if (!shippingAddressId) {
            throw new ApiError(
                400,
                "Shipping address is required"
            );
        }


        // Find user's cart
        const cart = await Cart.findOne({
            user: req.user._id
        });


        // Check cart exists
        if (!cart) {
            throw new ApiError(
                404,
                "Cart does not exist"
            );
        }


        // Check cart has items
        if (cart.items.length === 0) {
            throw new ApiError(
                400,
                "Cart is empty"
            );
        }


        // Find shipping address
        const address = await Address.findById(
            shippingAddressId
        );


        // Check address exists
        if (!address) {
            throw new ApiError(
                404,
                "Shipping address does not exist"
            );
        }


        // Check address belongs to logged-in user
        if (!address.user.equals(req.user._id)) {
            throw new ApiError(
                403,
                "You are not allowed to use this address"
            );
        }


        // Create order items
        const orderItems = [];


        // Calculate subtotal
        let subtotal = 0;


        // Process every cart item
        for (const item of cart.items) {

            // Find product
            const product = await Product.findById(
                item.product
            );


            // Check product exists
            if (!product) {
                throw new ApiError(
                    404,
                    "One of the products in your cart does not exist"
                );
            }


            // Check stock
            if (product.stock < item.quantity) {
                throw new ApiError(
                    400,
                    `${product.name} does not have enough stock`
                );
            }


            // Add item to order
            orderItems.push({
                product: product._id,
                seller: product.seller,
                quantity: item.quantity,
                priceAtPurchase: product.price
            });


            // Add item price to subtotal
            subtotal += product.price * item.quantity;

        }


        // Create order
        order = await Order.create({
            buyer: req.user._id,

            items: orderItems,

            shippingAddress: {
                fullName: address.fullName,
                phone: address.phone,
                building: address.building,
                area: address.area,
                city: address.city,
                state: address.state,
                pincode: address.pincode,
                country: address.country
            },

            subtotal,

            totalAmount: subtotal
        });

    }


    // ===================================
    // INVALID ORDER TYPE
    // ===================================

    else {

        throw new ApiError(
            400,
            "Invalid order type"
        );

    }


    // ===================================
    // SUCCESS RESPONSE
    // ===================================

    return res.status(201).json(
        new ApiResponse(
            201,
            order,
            "Order placed successfully"
        )
    );

});


export {
    placeOrder
};