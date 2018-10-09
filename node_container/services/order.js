const OrderModel = require('../models/order');

function findAll(req, res) {
    OrderModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

function findById(req, res) {
    const { orderId } = req.params;

    OrderModel.find({ OrderID: orderId })
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll,
    findById
};
