const router = require('express').Router();
const service = require('../services/dataService');

router.use('/:orderId([0-9]+)', service.getOrderDetailsByOrderId);

module.exports = router;
