const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    image: String,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);