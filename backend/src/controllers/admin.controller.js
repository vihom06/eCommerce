import { User } from "../models/user.js";
import { Seller } from "../models/seller.js";
import { Product } from "../models/product.js";
import { Profile } from "../models/profile.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";



const getAllSellersForAdmin = asyncHandler(async (req, res) => {

    const totalSellers = await Seller.countDocuments()

    const totalProducts = await Product.countDocuments()

    const sellers = await Seller.find()
        .populate({
            path: "user",
            select: "email role profile",
            populate: {
                path: "profile"
            }
        })
        .populate("businessAddress");

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalSellers,
                totalProducts,
                sellers
            },
            "All sellers fetched successfully"
        )
    );

});


const getAllUsersForAdmin = asyncHandler(async (req, res) => {

    const totalUsers = await User.countDocuments()

    const users = await User.find()
        .select("-password -refreshToken")
        .populate("profile")
        .populate({
            path: "seller",
            populate: {
                path: "businessAddress"
            }
        });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalUsers, 
                users
            },
            "Users fetched successfully"
        )
    );

});


const getSellerDetailsForAdmin = asyncHandler(async (req, res) => {

    const { sellerId } = req.params;

    const seller = await Seller.findById(sellerId)
        .populate({
            path: "user",
            select: "-password -refreshToken",
            populate: {
                path: "profile"
            }
        })
        .populate("businessAddress");

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    const totalProducts = await Product.countDocuments({
        seller: sellerId
    });

    const products = await Product.find({
        seller: sellerId
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                seller,
                totalProducts,
                products
            },
            "Seller details fetched successfully"
        )
    );

});



export { getAllSellersForAdmin, getAllUsersForAdmin,  getSellerDetailsForAdmin};  