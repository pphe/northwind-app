const router = require('express').Router();
const productService = require('../services/product');

router.use('/:productId([0-9]+)', productService.findById);
router.use('/', productService.findAll);

module.exports = router;
