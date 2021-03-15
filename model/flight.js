const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema =  new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    },
  })

const FlightSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    destination: {
        type: [DestinationSchema]
    },

    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },

    flightNo: {
        type: Number,
        default: function () {
            return Math.floor(Math.random() * 9999) + 10;
        },
    },
    departs: {
        type: Date
    }
})
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

module.exports = mongoose.model('Flight', FlightSchema);