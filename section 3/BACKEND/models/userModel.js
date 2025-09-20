const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    email : {type: String, unique: true, require: true},
    password: {type: String, require: true},
    city: {type: String, default: 'Unknown'},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', schema);
