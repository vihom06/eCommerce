import { User } from "../models/user.js";
import { Profile } from "../models/profile.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";



const updateProfile = asyncHandler(async(req,res)=>{


    const {
        firstName,
        lastName,
        phone,
        gender,
        dateOfBirth
    } = req.body;

    // Validate profile ID exists
    if(!req.user.profile){
        throw new ApiError(
            400,
            "User profile not found. Please create a profile first."
        );
    }

    const profile = await Profile.findByIdAndUpdate(

        req.user.profile,

        {
            firstName,
            lastName,
            phone,
            gender,
            dateOfBirth
        },

        {
            new:true
        }

    );




    if(!profile){

        throw new ApiError(
            404,
            "Profile not found"
        );

    }




    return res
    .status(200)
    .json(

        new ApiResponse(

            200,

            profile,

            "Profile updated successfully"

        )

    );


});


export { updateProfile };