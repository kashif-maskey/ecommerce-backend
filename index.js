require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
const mongoose = require('mongoose');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');
const orderRoutes = require('./routes/orders');


const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Ecommerce backend running!'));

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/orders', orderRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
