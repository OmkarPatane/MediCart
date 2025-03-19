const express=require("express")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const UserRoute=express.Router()


UserRoute.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ name, email, password });
        await user.save();

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({ message: "User Registered Successfully", token, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while registering the User" });
    }
});



module.exports=UserRoute