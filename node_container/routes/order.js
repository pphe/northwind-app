const router = require('express').Router();
const orderService = require('../services/order');

router.use('/:orderId([0-9]+)', orderService.findById);
router.use('/', orderService.findAll);

module.exports = router;
