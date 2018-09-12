const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    CategoryID: { type: Number, required: true, unique: true },
    CategoryName: { type: String, required: true, unique: true },
    Description: String,
    Picture: String
});

module.exports = mongoose.model('categories', categorySchema);
