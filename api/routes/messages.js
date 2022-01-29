const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// @desc Get messages
// @route GET /api/messages
// @access Public
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      succes: true,
      count: messages.length,
      data: messages,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Add message
// @route POST /api/messages
// @access Public
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      succes: true,
      count: messages.length,
      data: messages,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Delete message
// @route DELETE /api/messages
// @access Public
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      succes: true,
      count: messages.length,
      data: messages,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

module.exports = router;
