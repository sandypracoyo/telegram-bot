const express = require("express");
const router = express.Router();
const controllers = require('../controllers/order')

router.get('/', controllers.getAllOrder)
router.post('/', controllers.addOrder)
router.get('/:id', controllers.getOrderById)
router.put('/:id', controllers.updateOrderById)
router.delete('/:id', controllers.deleteOrderById)

module.exports = router