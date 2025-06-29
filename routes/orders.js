const express = require('express')
const { Order } = require('../models/models')
const authenticateToken = require('../authmiddleware')

const router = express.Router()

router.post('/', authenticateToken, async (req, res) => {
  res.status(501).json({ message: 'Create order not implemented' })
})

router.get('/', authenticateToken, async (req, res) => {
  res.status(501).json({ message: 'Fetch orders not implemented' })
})

module.exports = router
