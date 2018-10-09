const router = require('express').Router();
const categoryService = require('../services/category');

router.get('/:categoryId([0-9]+)', categoryService.findById);
router.get('/', categoryService.findAll);

module.exports = router;
