const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get("/api/users",userController.getAllUsers)

module.exports = router;