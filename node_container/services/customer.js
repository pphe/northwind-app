const CustomerModel = require('../models/customer');

function findAll(req, res) {
    CustomerModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

function findById(req, res) {
    const { customerId } = req.params;

    CustomerModel.find({ CustomerID: customerId })
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll,
    findById
};
