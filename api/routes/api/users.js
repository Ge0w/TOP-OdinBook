const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const { protect } = require("../../middleware/authMiddleware");

// @desc Get users
// @route GET /api/users
// @access Private
router.get(
  "/",
  protect,
  asyncHandler(async (req, res, next) => {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
      id: _id,
      name,
      email,
    });
  })
);

// @desc Create user
// @route POST /api/users
// @access Public
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create user

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcryptjs.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  })
);

// @desc Delete users
// @route DELETE /api/users
// @access User
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      await User.deleteOne(user);

      return res.status(200).json({
        success: true,
      });
    } catch (err) {
      return res.send(500).json({
        success: false,
        error: `Error: ${err.message}`,
      });
    }
  })
);

//Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = router;
