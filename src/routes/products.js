const express = require("express");
const productSchema = require("../models/products");

const router = express.Router();

//create products
router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all products

router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a product

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a product

router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, brand, price, inStock } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, brand, price, inStock } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a product

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
