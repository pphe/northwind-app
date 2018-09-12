const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    CategoryID: { type: Number, required: true },
    CategoryName: { type: String, required: true },
    Description: String,
    Picture: String
});

module.exports = mongoose.model('categories', categorySchema);
