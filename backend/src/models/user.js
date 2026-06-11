import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },


    password:{
        type:String,
        required:true
    },


    role:{
        type:String,
        enum:["Buyer","Seller","Admin"],
        default:"Buyer"
    },


    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },


    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller"
    },


    refreshToken:{
        type:String
    },


    active:{
        type:Boolean,
        default:true
    }


},{timestamps:true})


export const User = mongoose.model(
"User",
userSchema
)