const router = require("express").Router();
const stripe = require('stripe')('sk_test_51Nlc3sSFky9YWMLrETDTSUI6DwjdxGhVFaMPHivLitHvgXCDiY36WC0050g3dX1AwHkBUMtkEW7iOfdNetaNRTjr00vG4im5my');

var items=[];

router.post("/payment", async(req,res)=>{
    const products = req.body;
    items=products;
    // console.log(products.products)
    const lineItems = products.products?.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.title
            },
            unit_amount:product.price*100,
        },
        quantity:product.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:4000/success/{CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:4000/cancel",
    });
   res.json({id:session.id})
})

router.get("/items",(req,res)=>{
    try{
        const products = items
        // const cartPrice = items.product
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;