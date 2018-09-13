const CategoryModel = require('../models/category');

function findAll(req, res) {
    CategoryModel.find({})
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

function findById(req, res) {
    const { categoryId } = req.params;

    CategoryModel.find({ CategoryID: categoryId })
        .then(results => res.json(results))
        .catch(err => res.json(`Error: ${err}`));
}

module.exports = {
    findAll,
    findById
};
