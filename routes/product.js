const express = require("express");
const router = express.Router();
const controllers = require('../controllers/product')

router.get('/', controllers.getAllProduct)
router.post('/', controllers.addProduct)
router.get('/:id', controllers.getProductById)
router.put('/:id', controllers.updateProductById)
router.delete('/:id', controllers.deleteProductById)

module.exports = router