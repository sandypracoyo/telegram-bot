const express = require("express");
const router = express.Router();
const controllers = require('../controllers/customer')

router.get('/', controllers.getAllCustomer)
router.post('/', controllers.addCustomer)
router.get('/:id', controllers.getCustomerById)
router.put('/:id', controllers.updateCustomerById)
router.delete('/:id', controllers.deleteCustomerById)

module.exports = router