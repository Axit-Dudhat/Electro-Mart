const express = require('express');
const router = express.Router();
const userModel = require('../models/user'); 

// Get all users
router.get('/', async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

// Post user
router.post('/', async (req, res) => {
  try {
    const newuser = new userModel(req.body);
    await newuser.save();
    res.json(newuser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
}); 

module.exports = router;

