const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeTerritorySchema = new Schema({
    EmployeeID: { type: Number, required: true },
    TerritoryID: { type: Number, required: true }
});

module.exports = mongoose.model('employee-territories', employeeTerritorySchema);
