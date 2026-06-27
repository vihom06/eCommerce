import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({


user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    unique:true
},


companyName:{
    type:String,
    required:true,
    trim:true
},


description:{
    type:String,
    trim:true
},


GSTNumber:{
    type:String,
    required:true,
    unique:true,
    trim:true
},


businessAddress:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Address",
    required:true
},


approved:{
    type:Boolean,
    default:false
},


rating:{
    type:Number,
    default:0,
    min:0,
    max:5
}


},{timestamps:true})


export const Seller =
mongoose.model("Seller",sellerSchema)