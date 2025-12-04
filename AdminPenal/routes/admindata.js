const express = require('express');
const router = express.Router();
const admin = require('../models/admindata'); 

// Get all users
router.get('/', async (req, res) => {
  const Admin = await admin.find();
  res.json(Admin);
});

// Post user
router.post('/', async (req, res) => {
  try {
    const newadmin = new admin(req.body);
    await newadmin.save();
    res.json(newadmin);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  await admin.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
}); 

module.exports = router;

