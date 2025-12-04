const mongoose = require('mongoose');

  const Contect = new mongoose.Schema({
    name: String,
    email:String,
    phone:String,
    message:String
  });

  module.exports = mongoose.model('Contect', Contect);
