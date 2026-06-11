import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },


    firstName:{
        type:String,
        required:true
    },


    lastName:String,


    phone:String,


    image:String,


    addresses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        }
    ]


},{timestamps:true})


export const Profile =
mongoose.model("Profile",profileSchema)