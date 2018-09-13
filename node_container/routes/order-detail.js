const router = require('express').Router();
const orderDetailService = require('../services/order-detail');

router.get('/', orderDetailService.findAll);
router.get('/:orderDetailId([0-9]+)', orderDetailService.findOrderDetailsById);

module.exports = router;
