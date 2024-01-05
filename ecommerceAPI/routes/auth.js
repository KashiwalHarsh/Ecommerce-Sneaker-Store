const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_ENC_KEY).toString(),
    })
    //we use async await in saveing the data because saving the date takes ms of time and due to that it cannot be
    //logged on cosole without async await
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err) {
        res.status(500).json(err);
    }
})

//login
router.post("/login", async (req,res)=>{

    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(401).json("User not found - Wrong credentials!");
        const decryptedPass = CryptoJS.AES.decrypt(user.password, process.env.SEC_ENC_KEY).toString(CryptoJS.enc.Utf8)
        
        if(decryptedPass !== req.body.password) return res.status(401).json("Wrong password")

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },
        process.env.SEC_JWT_KEY,
        {expiresIn:"3d"});
        
        const {password,...others} = user._doc;
        res.status(200).json({...others,accessToken})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;