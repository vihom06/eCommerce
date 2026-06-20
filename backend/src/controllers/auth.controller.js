import { User } from "../models/user.js";
import { Profile } from "../models/profile.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async (req, res) => {


    // get data
    const {
        email,
        password,
        role
    } = req.body;



    // validation
    if (!email || !password) {

        throw new ApiError(
            400,
            "Email and password are required"
        );

    }



    // check existing user
    const existingUser = await User.findOne({
        email
    });


    if (existingUser) {

        throw new ApiError(
            409,
            "User already exists"
        );

    }




    // create user
    const user = await User.create({

        email,
        password,
        role,

    });



    //create empty profile and connect with the user
    const profile = await Profile.create({
        user: user._id,
    })
    user.profile = profile._id
    await user.save({
        validateBeforeSave: false
    });




    // remove password
    const createdUser = await User
        .findById(user._id)
        .select(
            "-password -refreshToken -__v"
        )
        .populate("profile");


        

    // response
    return res
        .status(201)
        .json(

            new ApiResponse(
                201,
                createdUser,
                "User registered successfully"
            )

        );


});




const loginUser = asyncHandler(async (req, res) => {


    // get data
    const {
        email,
        password
    } = req.body;



    // validation
    if (!email || !password) {

        throw new ApiError(
            400,
            "Email and password required"
        );

    }



    // find user
    const user = await User.findOne({
        email
    });



    if (!user) {

        throw new ApiError(
            404,
            "User does not exist"
        );

    }




    // check password
    const isPasswordValid =
        await user.isPasswordCorrect(password);



    if (!isPasswordValid) {

        throw new ApiError(
            401,
            "Invalid password"
        );

    }




    // create tokens
    const accessToken =
        user.generateAccessToken();


    const refreshToken =
        user.generateRefreshToken();




    // save refresh token
    user.refreshToken = refreshToken;


    await user.save({
        validateBeforeSave: false
    });




    // remove sensitive fields
    const loggedInUser = await User
        .findById(user._id)
        .select(
            "-password -refreshToken -__v"
        );




    // cookie options
    const options = {

        httpOnly: true,

        secure: true

    };





    return res
        .status(200)
        .cookie(
            "accessToken",
            accessToken,
            options
        )
        .cookie(
            "refreshToken",
            refreshToken,
            options
        )
        .json(

            new ApiResponse(

                200,

                {
                    user: loggedInUser,

                    accessToken,

                    refreshToken
                },

                "User logged in successfully"

            )

        );


});




const logoutUser = asyncHandler(async (req, res) => {


    // get refresh token
    const refreshToken = req.cookies?.refreshToken;


    if (!refreshToken) {

        throw new ApiError(
            401,
            "User is not logged in"
        );

    }



    // find user
    const user = await User.findOne({
        refreshToken
    });



    if (!user) {

        throw new ApiError(
            401,
            "Invalid refresh token"
        );

    }



    // remove refresh token
    user.refreshToken = undefined;


    await user.save({
        validateBeforeSave: false
    });



    // cookie options
    const options = {

        httpOnly: true,

        secure: true

    };



    return res
        .status(200)
        .clearCookie(
            "accessToken",
            options
        )
        .clearCookie(
            "refreshToken",
            options
        )
        .json(

            new ApiResponse(

                200,

                {},

                "User logged out successfully"

            )

        );


});




export {
    registerUser,
    loginUser,
    logoutUser,
}