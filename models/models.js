const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: True },
  price: { type: String, required: True},
  description : { type: String},
  image: {type : String},
  stock: {type : String}
});

const User = mongoose.model('user', userSchema)
const Product = mongoose.model('product', productSchema)
