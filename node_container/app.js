const express = require('express');
require('./lib/database');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// middleware
app.use('/northwind/category', require('./routes/category-router'));
app.use('/northwind/customer', require('./routes/customer-router'));

// response for invalid paths
app.use('/*', (req, res) => res.json('Nothing to see here :('));

app.listen(port, () => {
    console.log('Express server started on port', port);
});
