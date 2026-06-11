const invoiceSchema = new mongoose.Schema({

order:{
type:mongoose.Schema.Types.ObjectId,
ref:"Order"
},


invoiceNumber:String,


invoiceURL:String


},{timestamps:true})


export const Invoice =
mongoose.model("Invoice",invoiceSchema)