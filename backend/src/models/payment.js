const paymentSchema = new mongoose.Schema({

order:{
type:mongoose.Schema.Types.ObjectId,
ref:"Order"
},


amount:Number,


paymentMethod:String,


transactionId:String,


status:String


},{timestamps:true})


export const Payment =
mongoose.model("Payment",paymentSchema)