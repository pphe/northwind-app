const mongoose = require('mongoose');

const { Schema } = mongoose;

const regionSchema = new Schema({
    RegionID: { type: Number, required: true, unique: true },
    TerritoryID: { type: String, required: true }
});

module.exports = mongoose.model('regions', regionSchema);
