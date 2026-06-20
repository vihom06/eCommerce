import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },


    firstName:{
        type:String,
        trim:true,
        default: "",
    },


    lastName:{
        type:String,
        trim:true,
        default: "",
    },


    phone:{
        type:String,
        default: "",
    },


    gender:{
        type:String,
        default: "",
    },


    dateOfBirth:{
        type:Date,
        default: "",
    },


    image:{
        type:String,
        default: "",
    },


    addresses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        }
    ]


},{timestamps:true});



export const Profile =
mongoose.model("Profile",profileSchema)