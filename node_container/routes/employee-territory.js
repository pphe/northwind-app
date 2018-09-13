const router = require('express').Router();
const employeeTerritoryService = require('../services/employee-territory');

router.get('/', employeeTerritoryService.findAll);

module.exports = router;
