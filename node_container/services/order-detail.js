const OrderDetailModel = require('../models/order-detail');

function findAll(req, res) {
    OrderDetailModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

function findOrderDetailsById(req, res) {
    const { orderDetailId } = req.params;

    OrderDetailModel.find({ OrderID: orderDetailId })
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll,
    findOrderDetailsById
};
