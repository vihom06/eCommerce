import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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



// ==========================
// PASSWORD HASHING
// ==========================

userSchema.pre("save", async function(){

    if(!this.isModified("password")){
        return;
    }


    this.password = await bcrypt.hash(
        this.password,
        10
    );

});




// ==========================
// PASSWORD CHECKING METHOD
// ==========================

userSchema.methods.isPasswordCorrect = async function(password){

    return await bcrypt.compare(
        password,
        this.password
    );

}




// ==========================
// ACCESS TOKEN METHOD
// ==========================

userSchema.methods.generateAccessToken = function(){

    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            role:this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    );

}





// ==========================
// REFRESH TOKEN METHOD
// ==========================

userSchema.methods.generateRefreshToken = function(){

    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    );

}


export const User = mongoose.model(
    "User",
    userSchema
);