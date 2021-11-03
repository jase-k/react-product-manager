const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "name is required"],
		minlength: [6, "First name must be at least 6 characters long"],
	},
	price : {
		type: Number,
		required: [true, "A price is required!"],
		min: [0, "Price cannot be negative"]
	},
	description: {
		type: String, 
		required: [true, "Description is required"],
		minlength: [10, "Description must be longer than 10 characters"]
	}
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;