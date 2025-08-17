const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  featured: { type: Boolean, default: false },
  description: { type: String },
  category: { type: String, required: true },
  image: { type: String, required: true },
  imageId: { type: String, required: true }
});

module.exports = mongoose.model("Product", productSchema);
