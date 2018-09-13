const router = require('express').Router();
const customerService = require('../services/customer');

router.get('/', customerService.findAll);
router.get('/:customerId([0-9]+)', customerService.findById);

module.exports = router;
