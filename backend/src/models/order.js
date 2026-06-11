const orderSchema = new mongoose.Schema({


buyer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


items:[
{
product:{
type:mongoose.Schema.Types.ObjectId,
ref:"Product"
},

quantity:Number,

price:Number
}
],


shippingAddress:{
type:mongoose.Schema.Types.ObjectId,
ref:"Address"
},


totalAmount:Number,


status:{
type:String,
enum:[
"Placed",
"Packed",
"Shipped",
"Delivered",
"Cancelled"
],
default:"Placed"
}


},{timestamps:true})


export const Order =
mongoose.model("Order",orderSchema)