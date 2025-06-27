const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/routes');

app.use(express.json());
app.use('/', routes);


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






app.post('/products', async (req, res) => {
  const { name, price, description, image, stock } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

    try {
    const newProduct = new Product({ name, price, description, image, stock });
    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.put('/products/:id', authenticateToken, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product' });
  }
});
