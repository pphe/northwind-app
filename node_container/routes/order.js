const router = require('express').Router();
const orderService = require('../services/order');

router.get('/:orderId([0-9]+)', orderService.findById);
router.get('/', orderService.findAll);

module.exports = router;
