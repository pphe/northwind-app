const dataRouter = require('express').Router();
const CategoryModel = require('../models/category');
// const CustomerModel = require('../models/customer');
// const EmployeeTerritoryModel = require('../models/employee-territory');
// const OrderModel = require('../models/order');
// const OrderDetailModel = require('../models/order-detail');
// const ProductModel = require('../models/product');
// const RegionModel = require('../models/region');
// const ShipperModel = require('../models/shipper');
// const SupplierModel = require('../models/supplier');
// const TerritoryModel = require('../models/territory');

dataRouter.get('/category/:id([0-9]+)', (req, res) => {
    const { id } = req.params;

    CategoryModel.find({ CategoryID: id })
        .then(results => res.send(results))
        .catch(err => res.send(`Error: ${err}`));
});

// response for invalid paths
dataRouter.use('/*', (req, res) => {
    const routes = ['/category', '/customer', '/employeeterritory',
        '/order', '/orderdetail', '/product', '/region', '/shipper',
        '/supplier', '/territory'];

    res.status(400);
    res.send(`Available routes: ${routes.join(', ')}`);
});

module.exports = dataRouter;
