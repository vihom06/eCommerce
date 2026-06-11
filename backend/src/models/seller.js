const sellerSchema = new mongoose.Schema({


user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


companyName:{
type:String,
required:true
},


description:String,


GSTNumber:String,


businessAddress:{
type:mongoose.Schema.Types.ObjectId,
ref:"Address"
},


approved:{
type:Boolean,
default:false
},


rating:{
type:Number,
default:0
}


},{timestamps:true})


export const Seller =
mongoose.model("Seller",sellerSchema)