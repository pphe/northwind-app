const express = require('express');
require('./lib/database');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// middleware
app.use('/northwind', require('./router/data-router'));

// redirect invalid paths to /northwind
app.use('/*', (req, res) => res.redirect('/northwind'));

app.listen(port, () => {
    console.log('Express server started on port', port);
});
