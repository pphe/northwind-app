const mongoose = require('mongoose');

const { Schema } = mongoose;

const shipperSchema = new Schema({
    ShipperID: { type: Number, required: true, unique: true },
    CompanyName: { type: String, required: true, unique: true },
    Phone: { type: String, required: true },
});

module.exports = mongoose.model('shippers', shipperSchema);
