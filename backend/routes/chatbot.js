const express = require('express');
const router = express.Router();
const openai = require('../config/openai');

// @route   POST api/chatbot
// @desc    Chat with bot
// @access  Public
router.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai(message);
    res.json({ response });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;