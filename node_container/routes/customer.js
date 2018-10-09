const router = require('express').Router();
const customerService = require('../services/customer');

router.get('/:customerId([0-9]+)', customerService.findById);
router.get('/', customerService.findAll);

module.exports = router;
