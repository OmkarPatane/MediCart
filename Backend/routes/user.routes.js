const express=require("express")
const User = require("../models/user.mode")
const UserRoute=express.Router()


UserRoute.post("/register",async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User alreday exists"})
        }
        const user=new User({name,email,password})
        await user.save()
        res.status(201).json({message:"User Registered Successfully",user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error while registering the User"})
    }
})

UserRoute.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }

        res.json({message:"Login Successful",user})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Error while logging in"})
    }
})

module.exports=UserRoute