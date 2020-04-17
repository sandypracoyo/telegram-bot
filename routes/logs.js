const express = require("express");
const router = express.Router();
const controllers = require('../controllers/logs')

router.get('/', controllers.getLogs)

module.exports = router