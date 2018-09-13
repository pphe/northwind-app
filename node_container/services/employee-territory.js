const EmployeeTerritoryModel = require('../models/employee-territory');

function findAll(req, res) {
    EmployeeTerritoryModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll
};
