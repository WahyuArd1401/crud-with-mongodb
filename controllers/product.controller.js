const MealProduct = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await MealProduct.find({})
    res.status(200).json(products)
  } catch (error) {
    console.log({ message: error.message})
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await MealProduct.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const mealProduct = await MealProduct.create(req.body);
    res.status(200).json(mealProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await MealProduct.findByIdAndUpdate(id, req.body)

    if(!product){
      res.status(404).json({ message: 'Product not found' })
    }

    const updatedProduct = await MealProduct.findById(id)
    res.status(200).json(updatedProduct)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await MealProduct.findByIdAndDelete(id)

    if(!product){
      res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

module.exports = {  getProducts, getProduct, updateProduct, deleteProduct, createProduct };