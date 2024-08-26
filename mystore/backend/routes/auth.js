require('dotenv').config();
const authenticateToken = require("../middlewares/authMiddleware")
const express = require('express');
const router = express.Router();

// Rota protegida
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
