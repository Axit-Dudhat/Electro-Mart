const mongoose = require('mongoose');

  const user = new mongoose.Schema({
    name: String,
    emailOrPhone:String,
    password:String
  });

  module.exports = mongoose.model('Userinfo', user);
