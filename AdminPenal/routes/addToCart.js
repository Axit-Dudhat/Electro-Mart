const express = require('express');
const router = express.Router();
const addToCart = require('../models/addTocart'); 

// Get all users
router.get('/', async (req, res) => {
  const productinfor = await addToCart.find();
  res.json(productinfor);
});

// Post user
router.post('/', async (req, res) => {
    const newproductadd = new addToCart(req.body);
    await newproductadd.save();
    res.json(newproductadd);
});

router.put('/:id', async (req, res) => {
  const updated = await addToCart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await addToCart.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
}); 

module.exports = router;

