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

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)

module.exports = { User, Product }
