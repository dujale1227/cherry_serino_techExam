const express = require('express');
const router = express.Router();

const treasureController = require('../controllers/treasures.controller')
const moneyController = require('../controllers/money.controller')

router.get("/api/treasures",treasureController.getAllTreasures)
router.post("/api/treasuresDistance",[treasureController.getAllTreasures,treasureController.treasuresDistance,moneyController.moneyTreasure])


module.exports = router;