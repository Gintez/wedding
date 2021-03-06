const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
    uri: String,
    title: String,
    couple: Boolean,
    guests: Number,
    vegetarians: Number,
    song: String,
    submitted: Boolean
});

module.exports = mongoose.model('Guest', GuestSchema);