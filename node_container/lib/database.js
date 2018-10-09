const mongoose = require('mongoose');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.connect(`mongodb://${dbHost}/${dbName}`)
            .then(() => {
                console.log(`Connected to ${dbName} database`);
            })
            .catch((err) => {
                console.error('Error connecting to database:', err);
            });
    }
}

module.exports = new Database();
