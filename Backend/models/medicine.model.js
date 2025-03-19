const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  active_ingredient: {
    type: String,
    required: true,
  },
  dosage_form: {
    type: String,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  side_effects: {
    type: [String], // Array of strings
    default: [],
  },
  uses: {
    type: [String], // Array of strings
    required: true,
  },
  warnings: {
    type: [String], // Array of warnings
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // Image URL
    required: true,
  },
  
}, { timestamps: true });

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
