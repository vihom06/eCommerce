import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

seller:{
type:mongoose.Schema.Types.ObjectId,
ref:"Seller"
},


name:String,


description:String,


images:[String],


category:{
type:mongoose.Schema.Types.ObjectId,
ref:"Category"
},


price:Number,


stock:Number,


averageRating:{
type:Number,
default:0
}


},{timestamps:true})


export const Product =
mongoose.model("Product",productSchema)