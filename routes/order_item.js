const express = require("express");
const router = express.Router();
const controllers = require('../controllers/order_item')

router.get('/', controllers.getAllOrderItem)
router.get('/:id', controllers.getOrderItemById)

module.exports = router