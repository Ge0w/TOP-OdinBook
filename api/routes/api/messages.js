const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");

// @desc Get messages
// @route GET /messages
// @access Public
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Add message
// @route POST /messages
// @access Public
router.post("/", async (req, res, next) => {
  const { message } = req.body;

  try {
    const message = await Message.create(req.body);

    return res.status(201).json({
      success: true,
      data: message,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Delete message
// @route DELETE /messages
// @access Public
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find();

    return res.status(200).json({
      success: true,
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
