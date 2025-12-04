const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String,
  quantity: {
    type: Number,
    default: 1  
  },
  user: {
    type:String,
    null:''
  }
});

module.exports = mongoose.model('addToCart', addToCartSchema);
