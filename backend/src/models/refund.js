import mongoose from "mongoose";


const refundSchema =
new mongoose.Schema(
{


order:{

type:mongoose.Schema.Types.ObjectId,

ref:"Order",

required:true

},



user:{

type:mongoose.Schema.Types.ObjectId,

ref:"User"

},



reason:{

type:String,

required:true

},



amount:Number,



status:{

type:String,


enum:[
"Requested",
"Approved",
"Rejected",
"Completed"
],


default:"Requested"

}


},
{timestamps:true}
)


export const Refund =
mongoose.model(
"Refund",
refundSchema
);