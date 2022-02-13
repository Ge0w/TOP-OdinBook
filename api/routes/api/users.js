const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @desc Get users
// @route GET /api/users
// @access Private
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      succes: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: `Error: ${err.message}`,
    });
  }
});

// @desc Create user
// @route POST /api/users
// @access Public
router.post("/", async (req, res, next) => {
  try {
    const users = await Message.find();

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

// @desc Delete users
// @route DELETE /api/users
// @access User
router.delete("/", async (req, res, next) => {
  try {
    const users = await Message.find();

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
