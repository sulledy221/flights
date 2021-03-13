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
module.exports = mongoose.model('Flight', FlightSchema);