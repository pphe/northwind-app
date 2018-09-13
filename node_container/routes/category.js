const router = require('express').Router();
const categoryService = require('../services/category');

router.get('/', categoryService.findAll);
router.get('/:categoryId([0-9]+)', categoryService.findById);

module.exports = router;
