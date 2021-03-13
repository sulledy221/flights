const { ObjectId } = require("bson");

const ticketSchema = new Schema({
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