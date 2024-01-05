const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        userId:{type:String, required:true},
        products:[
            {
                productId:{type:String},
                quantity:{type:Number,default:1}
            }
        ]
        
    },
    {
        timestamps:true //creates createdAt and updatedAt time and date details
    }
)

module.exports = mongoose.model("Cart",CartSchema)