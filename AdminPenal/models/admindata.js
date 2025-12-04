const mongoose = require('mongoose');

  const Admin = new mongoose.Schema({
    name: String,
    emailOrPhone:String,
    password:String
  });

  module.exports = mongoose.model('Admin', Admin);
