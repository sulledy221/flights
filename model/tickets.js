const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = require("bson");

const TicketSchema = new Schema({
    seat: {
        seat: {type: String, match: /[A-F][1-9]\d?/}
    },
    flight: {
        type: ObjectId
    },

    price: {
        type: {type: Number, match: 0}
    }
})

module.exports = mongoose.model('Ticket', TicketSchema);