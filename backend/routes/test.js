const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get('/', (req, res) => {
  res.send('Test route is working!');
});

router.post('/create-user', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.json({ message: 'User created', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
