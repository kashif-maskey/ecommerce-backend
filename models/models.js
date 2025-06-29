const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  stock: { type: String }
})

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }]
})

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: Number
  }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = { User, Product }
