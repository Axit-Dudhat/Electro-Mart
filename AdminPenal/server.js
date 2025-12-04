const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/userinfo');
const adminRoutes = require('./routes/admindata');
const ContectRoutes=require('./routes/contect')
const AddToCartRoutes=require('./routes/addToCart')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/userinfo', userRoutes);
app.use('/admin', adminRoutes);
app.use('/contect', ContectRoutes);
app.use('/AddToCart', AddToCartRoutes);

mongoose.connect('mongodb://localhost:27017/Electro_Mart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));

