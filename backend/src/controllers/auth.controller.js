import { User } from "../models/user.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async(req,res)=>{


    // get data
    const {
        email,
        password,
        role
    } = req.body;



    // validation
    if(!email || !password){

        throw new ApiError(
            400,
            "Email and password are required"
        );

    }



    // check existing user
    const existingUser = await User.findOne({
        email
    });


    if(existingUser){

        throw new ApiError(
            409,
            "User already exists"
        );

    }




    // create user
    const user = await User.create({

        email,
        password,
        role

    });



    // remove password
    const createdUser = await User
    .findById(user._id)
    .select(
        "-password -refreshToken -__v"
    );



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




export {
    registerUser
}