const mongoose = require('../connection');

const productSchema = new mongoose.Schema({
    name: String,
    description: { type: String },
    price: { type: Number, require: true },
    category: { type: String },
    stock: { type: Number, require: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('product',productSchema)