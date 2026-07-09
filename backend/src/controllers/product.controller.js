import { Product } from "../models/product.js";
import { User } from "../models/user.js";
import { Seller } from "../models/seller.js"

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const createProduct = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user || !user.seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const seller = user.seller;

    const { name, description, images, category, price, stock } = req.body;

    if (
        !name ||
        !description ||
        !images ||
        !category ||
        price === undefined ||
        stock === undefined
    ) {
        throw new ApiError(
            400,
            "All fields are required"
        );
    }

    const newProduct = await Product.create({
        seller,
        name,
        description,
        images,
        category,
        price,
        stock
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            newProduct,
            "Product created successfully"
        )
    );

});


const updateProduct = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    const allowedFields = [
        "name",
        "description",
        "images",
        "category",
        "price",
        "stock"
    ];

    const updateData = {};

    allowedFields.forEach((field) => {

        if (req.body[field] !== undefined) {

            updateData[field] = req.body[field];

        }

    });

    const seller = await Seller.findOne({
        user: req.user._id
    });

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const updatedProduct = await Product.findOneAndUpdate(
        {
            _id: productId,
            seller: seller._id
        },
        {
            $set: updateData
        },
        {
            new: true,
            runValidators: true
        }
    );

    if (!updatedProduct) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedProduct,
            "Product updated successfully"
        )
    );

});


const deleteProduct = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    const seller = await Seller.findOne({
        user: req.user._id
    });

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const deletedProduct = await Product.findOneAndDelete({
        _id: productId,
        seller: seller._id
    });

    if (!deletedProduct) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            deletedProduct,
            "Product deleted successfully"
        )
    );

});


const getMyProducts = asyncHandler(async (req, res) => {

    const seller = await Seller.findOne({
        user: req.user._id
    });

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const products = await Product.find({
        seller: seller._id
    }).populate("category");

    return res.status(200).json(
        new ApiResponse(
            200,
            products,
            "Products fetched successfully"
        )
    );

});


const getMyProduct = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    const seller = await Seller.findOne({
        user: req.user._id
    });

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const product = await Product.findOne({
        _id: productId,
        seller: seller._id
    }).populate("category");

    if (!product) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            product,
            "Product fetched successfully"
        )
    );

});


const getAllProducts = asyncHandler(async (req, res) => {

    const products = await Product.find()
        .populate({
            path: "seller",
            select: "companyName rating",
            populate: {
                path: "user",
                select: "profile",
                populate: {
                    path: "profile",
                    select: "firstName lastName image"
                }
            }
        })
        .populate("category");

    return res.status(200).json(
        new ApiResponse(
            200,
            products,
            "Products fetched successfully"
        )
    );

});


const getProduct = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    const product = await Product.findById(productId)
        .populate({
            path: "seller",
            select: "companyName description rating",
            populate: {
                path: "user",
                select: "profile",
                populate: {
                    path: "profile",
                    select: "firstName lastName image"
                }
            }
        })
        .populate("category");

    if (!product) {
        throw new ApiError(
            404,
            "Product not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            product,
            "Product fetched successfully"
        )
    );

});


export {
    createProduct,
    updateProduct,
    deleteProduct,
    getMyProducts,
    getMyProduct,
    getAllProducts,
    getProduct
};