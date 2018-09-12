const mongoose = require('mongoose');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(`mongodb://${dbHost}/${dbName}`, { useNewUrlParser: true })
            .then(() => {
                console.log(`Connected to ${dbName} database`);
            })
            .catch((err) => {
                console.error('Error connecting to database:', err);
            });
    }
}

module.exports = new Database();
