const express = require("express");
const router = express.Router();
const controllers = require('../controllers/driver')

router.get('/', controllers.getAllDriver)
router.post('/', controllers.addDriver)
router.get('/:id', controllers.getDriverById)
router.put('/:id', controllers.updateDriverById)
router.delete('/:id', controllers.deleteDriverById)

module.exports = router