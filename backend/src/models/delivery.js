import mongoose from "mongoose";


const deliverySchema = new mongoose.Schema(
{


order:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Order",
    required:true
},


trackingNumber:{
    type:String
},


currentStatus:{
    type:String,

    enum:[
        "Preparing",
        "Shipped",
        "Out For Delivery",
        "Delivered"
    ],

    default:"Preparing"
},


updates:[

    {

    location:String,

    message:String,

    time:{
        type:Date,
        default:Date.now
    }

    }

],


estimatedDelivery:{
    type:Date
}


},
{timestamps:true}
)


export const Delivery =
mongoose.model("Delivery",deliverySchema);