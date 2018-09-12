const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderDetailSchema = new Schema({
    OrderID: { type: Number, required: true },
    ProductID: { type: Number, required: true },
    UnitPrice: { type: Number, required: true },
    Quantity: { type: Number, required: true },
    Discount: { type: Number, required: true },
});

module.exports = mongoose.model('order-details', orderDetailSchema);
