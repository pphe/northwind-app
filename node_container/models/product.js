const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    ProductID: { type: Number, required: true, unique: true },
    ProductName: { type: String, required: true },
    SupplierID: { type: Number, required: true },
    CategoryID: { type: Number, required: true },
    QuantityPerUnit: { type: String, required: true },
    UnitPrice: { type: Number, required: true },
    UnitsInStock: { type: Number, required: true },
    UnitsOnOrder: { type: Number, required: true },
    ReorderLevel: { type: Number, required: true },
    Discontinued: { type: Number, required: true }
});

module.exports = mongoose.model('products', productSchema);
