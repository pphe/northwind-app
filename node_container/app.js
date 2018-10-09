const express = require('express');
require('./lib/database');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// middleware
app.use('/api/category', require('./routes/category'));
app.use('/api/customer', require('./routes/customer'));
app.use('/api/employee-territory', require('./routes/employee-territory'));
app.use('/api/order-detail', require('./routes/order-detail'));
app.use('/api/order', require('./routes/order'));
app.use('/api/product', require('./routes/product'));

// response for invalid paths
app.use('/*', (req, res) => res.json('Nothing to see here :('));

app.listen(port, () => {
    console.log('Express server started on port', port);
});

// remaining services and routers to add
// const ProductModel = require('../models/product');
// const RegionModel = require('../models/region');
// const ShipperModel = require('../models/shipper');
// const SupplierModel = require('../models/supplier');
// const TerritoryModel = require('../models/territory');
