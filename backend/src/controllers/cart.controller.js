import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";




const addToCart = asyncHandler(async (req, res) => {

    const { productId, quantity } = req.body;

    if (!productId) {
        throw new ApiError(
            400,
            "Product is required"
        );
    }

    const product = await Product.findById(productId);

    if (!product) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    const requestedQuantity = quantity || 1;

    if (requestedQuantity > product.stock) {
        throw new ApiError(
            400,
            "Requested quantity exceeds available stock"
        );
    }

    let cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {

        cart = await Cart.create({
            user: req.user._id,
            items: [
                {
                    product: productId,
                    quantity: requestedQuantity
                }
            ]
        });

    } else {

        const existingItem = cart.items.find(item =>
            item.product.toString() === productId
        );

        if (existingItem) {

            const newQuantity = existingItem.quantity + requestedQuantity;

            if (newQuantity > product.stock) {
                throw new ApiError(
                    400,
                    "Requested quantity exceeds available stock"
                );
            }

            existingItem.quantity = newQuantity;

        } else {

            cart.items.push({
                product: productId,
                quantity: requestedQuantity
            });

        }

        await cart.save();

    }

    return res.status(200).json(
        new ApiResponse(
            200,
            cart,
            "Product added to cart successfully"
        )
    );

});



const getMyCart = asyncHandler(async (req, res) => {

    const cart = await Cart.findOne({
        user: req.user._id
    })
    .populate({
        path: "items.product",
        populate: [
            {
                path: "category",
                select: "name"
            },
            {
                path: "seller",
                select: "companyName rating"
            }
        ]
    });

    if (!cart) {
        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    items: [],
                    totalItems: 0,
                    subtotal: 0
                },
                "Cart is empty"
            )
        );
    }

    let totalItems = 0;
    let subtotal = 0;

    cart.items.forEach((item) => {

        totalItems += item.quantity;
        subtotal += item.quantity * item.product.price;

    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalItems,
                subtotal,
                cart
            },
            "Cart fetched successfully"
        )
    );

});



const updateCartQuantity = asyncHandler(async (req, res) => {

    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
        throw new ApiError(
            400,
            "Product and quantity are required"
        );
    }

    if (quantity < 1) {
        throw new ApiError(
            400,
            "Quantity must be at least 1"
        );
    }

    const product = await Product.findById(productId);

    if (!product) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    if (quantity > product.stock) {
        throw new ApiError(
            400,
            "Requested quantity exceeds available stock"
        );
    }

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        throw new ApiError(
            404,
            "Cart not found"
        );
    }

    const cartItem = cart.items.find(item =>
        item.product.toString() === productId
    );

    if (!cartItem) {
        throw new ApiError(
            404,
            "Product not found in cart"
        );
    }

    cartItem.quantity = quantity;

    await cart.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            cart,
            "Cart updated successfully"
        )
    );

});



const removeFromCart = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        throw new ApiError(
            404,
            "Cart not found"
        );
    }

    const productExists = cart.items.some(item =>
        item.product.toString() === productId
    );

    if (!productExists) {
        throw new ApiError(
            404,
            "Product not found in cart"
        );
    }

    cart.items = cart.items.filter(item =>
        item.product.toString() !== productId
    );

    await cart.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            cart,
            "Product removed from cart successfully"
        )
    );

});



const clearCart = asyncHandler(async (req, res) => {

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        throw new ApiError(
            404,
            "Cart not found"
        );
    }

    cart.items = [];

    await cart.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            cart,
            "Cart cleared successfully"
        )
    );

});



export {
    addToCart,
    getMyCart,
    updateCartQuantity,
    removeFromCart,
    clearCart
};