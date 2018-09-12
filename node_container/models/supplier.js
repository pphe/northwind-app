const mongoose = require('mongoose');

const { Schema } = mongoose;

const supplierSchema = new Schema({
    SupplierID: { type: Number, required: true, unique: true },
    CompanyName: { type: String, required: true, unique: true },
    ContactName: { type: String, required: true },
    ContactTitle: { type: String, required: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    Region: { type: String, required: true },
    PostalCode: { type: Number, required: true },
    Country: { type: String, required: true },
    Phone: { type: String, required: true },
    Fax: String,
    HomePage: String
});

module.exports = mongoose.model('suppliers', supplierSchema);
