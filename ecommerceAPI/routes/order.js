const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()


//*CREATE
router.post("/",verifyToken, async (req,res)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err);
    }
})

//*UPDATE
router.put("/:id",verifyTokenAndAdmin, async (req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedOrder)

    }catch(err){
        res.status(500).json(err)
    }
})

//*DELETE
router.delete("/:id",verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

//*GET USER Orders
router.get("/find/:userId",verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const orders = await Cart.find({userId:req.params.userId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

//*GET ALL orders
router.get("/", verifyTokenAndAdmin ,async (req,res)=>{
    try{
        const orders = await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

//*Get Monthly Income
router.get("/income", verifyTokenAndAdmin ,async (req,res)=>{
    const productId = req.query.pid;
    const date = new Date()

    const lastMonth = new Date(date);
    lastMonth.setMonth(date.getMonth() - 1);

    const previousMonth = new Date(lastMonth);
    previousMonth.setMonth(lastMonth.getMonth() - 1);

    try{
        const income = await Order.aggregate([
            { $match : {
                createdAt: { $gte: previousMonth },
                ...(productId && {
                  products: { $elemMatch: { productId } },
                }),
              },
            },
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                },
            },
            {
                $sort: { _id: 1 }, // Sort by month in ascending order (1) or -1 for descending
            },
        ]);
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
