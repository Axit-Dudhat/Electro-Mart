const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  imageUrl:String,
  category: String,
  type: String,
  user: String 
});

module.exports = mongoose.model('Product', productSchema);
