const mongoose = require('mongoose');

const { Schema } = mongoose;

const territorySchema = new Schema({
    TerritoryID: { type: Number, required: true, unique: true },
    TerritoryDescription: { type: String, required: true },
    RegionID: { type: Number, required: true },
});

module.exports = mongoose.model('territories', territorySchema);
