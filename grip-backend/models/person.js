const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    gender: { type: String, required: true },
    country: { type: String, required: true },
    internship: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', PersonSchema);