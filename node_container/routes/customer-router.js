const router = require('express').Router();
const customerService = require('../services/customer-service');

router.get('/', customerService.findAll);
router.get('/', customerService.findById);
