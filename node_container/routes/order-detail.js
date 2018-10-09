const router = require('express').Router();
const orderDetailService = require('../services/order-detail');

router.get('/:orderDetailId([0-9]+)', orderDetailService.findOrderDetailsById);
router.get('/', orderDetailService.findAll);

module.exports = router;
