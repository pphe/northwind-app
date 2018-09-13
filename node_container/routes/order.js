const router = require('express').Router();
const orderService = require('../services/order');

router.use('/', orderService.findAll);
router.use('/:orderId([0-9]+)', orderService.findById);

module.exports = router;
