const express = require('express');
const mongoose = require('mongoose');
const MealProduct = require('./models/product');
const productRoutes = require('./routes/product.routes');

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api/products', productRoutes);

//Test Route
app.get('/', (req, res) => {
  res.send('Hello backend')
})

//Create Product
// app.post('/api/products', async (req,res) => {
//   try {
//     const mealProduct = await MealProduct.create(req.body);
//     res.status(200).json(mealProduct)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

// //Get All Products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await MealProduct.find({})
//     res.status(200).json(products)
//   } catch (error) {
//     console.log({ message: error.message})
//   }
// })

// //Get Single Product
// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const product = await MealProduct.findById(req.params.id)
//     res.status(200).json(product)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

//Update Product
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params

//     const product = await MealProduct.findByIdAndUpdate(id, req.body)

//     if(!product){
//       res.status(404).json({ message: 'Product not found' })
//     }

//     const updatedProduct = await MealProduct.findById(id)
//     res.status(200).json(updatedProduct)

//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

//Delete Product
// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params

//     const product = await MealProduct.findByIdAndDelete(id)

//     if(!product){
//       res.status(404).json({ message: 'Product not found' })
//     }

//     res.status(200).json({ message: 'Product deleted successfully' })
//   } catch (error) {
//     res.status(500).json({ message: error.message})
//   }
// })

//Connect to MongoDB
mongoose.connect('mongodb+srv://wahyuardiansyah764:DKBCL1LsiVPSWN9G@backend.psa5t.mongodb.net/Node_API?retryWrites=true&w=majority&appName=Backend')
  .then(() => {
    console.log('Connection successfull!');
    app.listen(9000, () => {
      console.log(`Server running on http://localhost:9000`);
    })
  })
  .catch((err) => {
    console.log(err);
  })