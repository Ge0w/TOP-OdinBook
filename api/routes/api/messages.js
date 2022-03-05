const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");
const User = require("../../models/User");
const asyncHandler = require("express-async-handler");
const { protect } = require("../../middleware/authMiddleware");

// @desc Get messages
// @route GET /messages
// @access Private
router.get("/", protect, async (req, res, next) => {
  try {
    const messages = await Message.find({ user: req.user.id });

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
router.post(
  "/",
  protect,
  asyncHandler(async (req, res, next) => {
    try {
      const message = await Message.create({
        text: req.body.text,
        user: req.user.id,
      });
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
  })
);

// @desc Delete message
// @route DELETE /messages
// @access Public
router.delete("/:id", protect, async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      res.status(400);
      throw new Error("Message not found");
    }

    const user = await User.findById(req.user.id);

    // Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the message user
    if (message.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorised");
    }

    await Message.deleteOne(message);

    return res.status(200).json({
      success: true,
      id: req.params.id,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Update message
// @route PUT /messages
// @access Public
router.put("/:id", protect, async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      res.status(400);
      throw new Error("Message not found");
    }

    const user = await User.findById(req.user.id);

    // Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the message user
    if (message.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorised");
    }

    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      data: updatedMessage,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

module.exports = router;
