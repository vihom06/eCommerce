const addressSchema = new mongoose.Schema({

user:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"User"
},


name:String,   // Home, Office


street:String,


city:String,


state:String,


pincode:String,


country:{
type:String,
default:"India"
},


isDefault:{
type:Boolean,
default:false
}


},{timestamps:true})


export const Address =
mongoose.model("Address",addressSchema)