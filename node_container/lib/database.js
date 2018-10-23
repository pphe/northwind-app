const mongoose = require('mongoose');
require('dotenv').config();

// if no .env file, default to docker networking info
const dbHost = process.env.DB_HOST || '172.17.0.2';
const dbPort = process.env.DB_PORT || '27017';
const dbName = process.env.DB_NAME || 'Northwind';

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
            .then(() => {
                console.log(`Connected to ${dbName} database`);
            })
            .catch((err) => {
                console.error('Error connecting to database:', err);
            });
    }
}

module.exports = new Database();
