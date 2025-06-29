const express = require('express')
const { Cart } = require('../models/models')
const authenticateToken = require('../authmiddleware')

const router = express.Router()

router.post('/add', authenticateToken, async (req, res) => {
  res.status(501).json({ message: 'Add to cart not implemented ' })
})

router.get('/', authenticateToken, async (req, res) => {
  res.status(501).json({ message: 'Fetch cart not implemented ' })
})

router.delete('/remove/:itemId', authenticateToken, async (req, res) => {
  res.status(501).json({ message: 'Remove from cart not implemented ' })
})

module.exports = router

