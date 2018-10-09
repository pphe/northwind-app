const router = require('express').Router();
const productService = require('../services/product');

router.use('/', productService.findAll);
router.use('/:productId([0-9]+)', productService.findById);

module.exports = router;
