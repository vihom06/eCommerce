import { User } from "../models/user.js";
import { Seller } from "../models/seller.js";
import { Product } from "../models/product.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Profile } from "../models/profile.js";


const createSeller = asyncHandler(async (req, res) => {
    const { companyName, description, GSTNumber, businessAddress } = req.body;

    if (!companyName || !GSTNumber || !businessAddress) {
        throw new ApiError(
            400,
            "Company name, GST number and business address are required"
        );
    }

    //check if the user is already a seller
    const existingSeller = await Seller.findOne({ user: req.user._id });
    if (existingSeller) {
        throw new ApiError(400, "User is already a seller");
    }


    //create a new seller
    const newSeller = await Seller.create({
        user: req.user._id,
        companyName,
        description,
        GSTNumber,
        businessAddress
    });

    await User.findByIdAndUpdate(
        req.user._id,
        {
            seller: newSeller._id,
            role: "Seller"
        }
    );

    //return response
    return res.status(201).json(
        new ApiResponse(
            201,
            newSeller,
            "Seller created successfully"
        )
    );

});


const updateSeller = asyncHandler(async (req, res) => {

    const allowedFields = [
        "companyName",
        "description",
        "GSTNumber",
        "businessAddress"
    ];


    const updateData = {};


    allowedFields.forEach((field) => {

        if (req.body[field] !== undefined) {

            updateData[field] = req.body[field];

        }

    });



    const seller = await Seller.findOneAndUpdate(

        {
            user: req.user._id
        },

        {
            $set: updateData
        },

        {
            new: true,
            runValidators: true
        }

    );



    if (!seller) {

        throw new ApiError(
            404,
            "Seller not found"
        );

    }



    return res
        .status(200)
        .json(

            new ApiResponse(
                200,
                seller,
                "Seller updated successfully"
            )

        );


});


const deleteSeller = asyncHandler(async (req, res) => {

    const seller = await Seller.findOne({
        user: req.user._id
    })

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        )
    }

    const deletedProducts = await Product.deleteMany({
        seller: seller._id
    })

    await User.findByIdAndUpdate(
        req.user._id,
        {
            seller: null,
            role: "Buyer"
        }
    );

    const deletedSeller = await Seller.findOneAndDelete({
        _id: seller._id
    });


    return res.status(200).json(
        new ApiResponse(
            200,
            deletedSeller,
            "Seller deleted successfully"
        )
    )

});


const getSeller = asyncHandler(async (req, res) => {

    const { sellerId } = req.params;

    const seller = await Seller.findOne({
        _id: sellerId,
        approved: true
    })
        .select(
            "companyName description GSTNumber businessAddress rating user"
        )
        .populate({
            path: "user",
            select: "email profile",
            populate: {
                path: "profile",
                select: "firstName lastName phone image"
            }
        })
        .populate({
            path: "businessAddress",
            select: "building area city state pincode country"
        });

    if (!seller) {
        throw new ApiError(
            404,
            "Seller not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            seller,
            "Seller fetched successfully"
        )
    );

});


const getAllSellersForAdmin = asyncHandler(async (req, res) => {

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
            sellers,
            "All sellers fetched successfully"
        )
    );

});


const getAllSellersForBuyers = asyncHandler(async (req, res) => {

    const sellers = await Seller.find({
        approved: true
    })
        .select("companyName description rating")
        .populate({
            path: "user",
            select: "profile",
            populate: {
                path: "profile",
                select: "firstName lastName image"
            }
        });

    return res.status(200).json(
        new ApiResponse(
            200,
            sellers,
            "Sellers fetched successfully"
        )
    );

});



export { createSeller, updateSeller, deleteSeller, getSeller, getAllSellersForAdmin, getAllSellersForBuyers };  