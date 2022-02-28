const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../../models/User");

// @desc Get users
// @route GET /api/users
// @access Private
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
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
  })
);

// @desc Create user
// @route POST /api/users
// @access Public
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    try {
      const user = await User.create(req.body);

      return res.status(201).json({
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: `Error: ${err.user}`,
      });
    }
  })
);

// @desc Delete users
// @route DELETE /api/users
// @access User
router.delete(
  "/",
  asyncHandler(async (req, res, next) => {
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
  })
);

module.exports = router;
