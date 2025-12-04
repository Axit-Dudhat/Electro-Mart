const express = require('express');
const router = express.Router();
const contect = require('../models/contect'); 

// Get all users
router.get('/', async (req, res) => {
  const contectinfo = await contect.find();
  res.json(contectinfo);
});

// Post user
router.post('/', async (req, res) => {
    const newcontect = new contect(req.body);
    await newcontect.save();
    res.json(newcontect);
});

router.delete('/:id', async (req, res) => {
  await contect.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
}); 

module.exports = router;

