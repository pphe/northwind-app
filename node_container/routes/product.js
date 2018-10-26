const router = require('express').Router();
const productService = require('../services/product');

router.get('/:productId([0-9]+)', productService.findById);
router.get('/', productService.findAll);

module.exports = router;
