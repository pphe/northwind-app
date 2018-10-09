const ProductModel = require('../models/product');

function findAll(req, res) {
    ProductModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

function findById(req, res) {
    const { productId } = req.params;

    ProductModel.find({ ProductID: productId })
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll,
    findById
};
