const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    OrderID: { type: Number, required: true, unique: true },
    CustomerID: { type: String, required: true },
    EmployeeID: { type: Number, required: true },
    OrderDate: { type: String, required: true },
    RequiredDate: { type: String, required: true },
    ShippedDate: { type: String, required: true },
    ShipVia: { type: String, required: true },
    Freight: { type: Number, required: true },
    ShipName: { type: String, required: true },
    ShipAddress: { type: String, required: true },
    ShipCity: { type: Number, required: true },
    ShipRegion: { type: String, required: true },
    ShipPostalCode: { type: String, required: true },
    ShipCountry: { type: String, required: true }
});

module.exports = mongoose.model('orders', orderSchema);
