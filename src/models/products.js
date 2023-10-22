const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
