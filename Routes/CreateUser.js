const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body , validationResult} = require("express-validator");

router.post('/createuser',[
    body('email', 'not an email').isEmail(),
    body("password").isLength({min: 5})
] ,async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    try {
        await User.create({
            
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            phnumber: req.body.phnumber,
            email: req.body.email,
            password: req.body.password
        })
    res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post('/loginuser',async (req, res)=>{
    let email = req.body.email;
    try {
        let userData= await User.findOne({email});
        if(!userData){
            return res.status(400).json({ errors: 'Invalid Credentials'});
        }
        if(req.body.password !== userData.password){
            return res.status(400).json({ errors: 'Invalid Credentials'});
        }
        return res.json({ success: true});

    } catch (error) {
        console.log(error)
        return res.json({success: false});
    }
})
 
module.exports = router;