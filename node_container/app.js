const express = require('express');
const mongoose = require('mongoose');
const CategoryModel = require('./models/category');
require('./lib/database');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {

    // test query against categories collection
    CategoryModel.find({ CategoryID: 2 })
        .then(results => results.forEach(doc => console.log(doc)))
        .catch(err => console.log('Error:', err));
});
