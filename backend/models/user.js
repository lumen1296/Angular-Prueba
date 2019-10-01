const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dni: {
        type: String, index: { unique: true }
    },
    email: {
        type: String, index: { unique: true }
    },
    phone: {
        type: String
    }

}, {
    collection: 'user'
});

module.exports = mongoose.model('user', user);