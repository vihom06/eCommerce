import jwt from "jsonwebtoken";

import { User } from "../models/user.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";



// ===================================
// VERIFY USER LOGIN
// ===================================

const verifyJWT = asyncHandler(async(req, res, next)=>{


    // get token from cookies or headers
    const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace(
        "Bearer ",
        ""
    );



    // token validation
    if(!token){

        throw new ApiError(
            401,
            "Unauthorized request"
        );

    }




    // verify token
    const decodedToken = jwt.verify(

        token,

        process.env.ACCESS_TOKEN_SECRET

    );




    // find user
    const user = await User
    .findById(decodedToken._id)
    .select(
        "-password -refreshToken"
    );




    // check user
    if(!user){

        throw new ApiError(
            401,
            "Invalid access token"
        );

    }




    // attach user to request
    req.user = user;




    // continue
    next();


});






// ===================================
// ROLE AUTHORIZATION
// ===================================

const authorizeRoles = (...roles)=>{


    return (req, res, next)=>{


        if(
            !roles.includes(req.user.role)
        ){

            throw new ApiError(
                403,
                "You are not allowed to access this resource"
            );

        }



        next();


    }


};






export {

    verifyJWT,

    authorizeRoles

};