const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get("/api/users", async (req, res) => {
    try {
        await userController.getAllUsers(req, response => {
            res.status(200).json(response);
        });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error', err:err });
    }

})
// router.get("/api/users",userController.getAllUsers)

module.exports = router;