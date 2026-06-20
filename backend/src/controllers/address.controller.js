import { Address } from "../models/address.js";
import { Profile } from "../models/profile.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";


const addAddress = asyncHandler(async (req, res) => {

  const { addressType, fullName, phone, building, area, city, state, pincode, country } = req.body;

  if (!fullName || !phone || !building || !area || !city || !state || !pincode) {
    throw new ApiError(
      400,
      "All fields are required"
    );
  }

  const userAddress = await Address.create({
    user: req.user._id,
    addressType,
    fullName,
    phone,
    building,
    area,
    city,
    state,
    pincode,
    country,
  })

  //get the profile of respected user
  const profile = await Profile.findOne({
    user: req.user._id
  })

  //validate if the profile exist
  if (!profile) {
    throw new ApiError(404, "Profile not found")
  }

  //add the address into the profile 
  profile.addresses.push(userAddress._id)

  //save the profile model
  await profile.save()


  //return response
  return res.status(200).json(
    new ApiResponse(
      200,
      userAddress,
      "Address added successfully"
    )
  )

})


const updateAddress = asyncHandler(async (req, res) => {

  //get the address which has to be updated
  const address = await Address.findOne({
    _id: req.params.addressId,
    user: req.user._id
  })


  //validate
  if(!address){
    throw new ApiError(
      404,
      "Address not found"
    )
  }


  //set the updated values 
  Object.assign(address, req.body);


  //save in the database
  await address.save()


  //return response 
  return res.status(200).json(
    new ApiResponse(
      200,
      address,
      "Address updated successfully"
    )
  )


})


const deleteAddress = asyncHandler(async(req,res)=>{

    const { addressId } = req.params;


    const address = await Address.findOneAndDelete({
        _id: addressId,
        user: req.user._id
    });


    if(!address){

        throw new ApiError(
            404,
            "Address not found"
        );

    }


    await Profile.findOneAndUpdate(
        { user:req.user._id },
        {
            $pull:{
                addresses:addressId
            }
        }
    );


    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Address deleted successfully"
        )
    );

});


const getAllAddresses = asyncHandler(async(req,res)=>{

    const addresses = await Address.find({
        user:req.user._id
    });


    return res.status(200).json(

        new ApiResponse(
            200,
            addresses,
            "Addresses fetched successfully"
        )

    );

});


const setDefaultAddress = asyncHandler(async(req,res)=>{

    const { addressId } = req.params;


    // remove old default address
    await Address.updateMany(
        {
            user:req.user._id
        },
        {
            isDefault:false
        }
    );


    // set new default
    const address = await Address.findOneAndUpdate(
        {
            _id:addressId,
            user:req.user._id
        },
        {
            isDefault:true
        },
        {
            new:true
        }
    );


    if(!address){

        throw new ApiError(
            404,
            "Address not found"
        );

    }


    return res.status(200).json(

        new ApiResponse(
            200,
            address,
            "Default address updated"
        )

    );


});


export { addAddress, updateAddress, deleteAddress, getAllAddresses, setDefaultAddress };