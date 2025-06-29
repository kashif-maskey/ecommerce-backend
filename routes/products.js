const express = require('express')
const { Product } = require('../models/models')
const authenticateToken = require('../authmiddleware')

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, price, description, image, stock } = req.body
  if (!name || !price) return res.status(400).json({ message: 'Name and price are required' })

  try {
    const newProduct = new Product({ name, price, description, image, stock })
    await newProduct.save()
    res.status(201).json({ message: 'Product created', product: newProduct })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating product' })
  }
})

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error fetching products' })
  }
})

router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' })

    res.json({ message: 'Product updated', product: updatedProduct })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error updating product' })
  }
})

module.exports = router
