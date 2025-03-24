const express=require("express")
const Medicine = require("../models/medicine.model")
const authenticate = require("../middlewares/authmiddleware")
const MedicineRouter=express.Router()



MedicineRouter.get("/", async (req, res) => {
    try {
        const { search, page = 1, limit = 10 } = req.query;

        let query = {};

        if (search) {
            query.name = { $regex: search, $options: "i" }; // Case-insensitive search
        }

        const medicines = await Medicine.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching medicines", error });
    }
});

MedicineRouter.post("/add", authenticate, async (req, res) => {
    try {
        // Ensure only admin users can add medicines
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied! Only admins can add medicines." });
        }

        const newMedicine = new Medicine({
            ...req.body, // Spread all incoming fields
            registered_by: req.user._id // Save the admin ID
        });

        await newMedicine.save();
        res.status(201).json({ message: "Medicine added successfully", data: newMedicine });

    } catch (error) {
        res.status(500).json({ message: "Failed to add medicine", error: error.message });
    }
});




module.exports=MedicineRouter