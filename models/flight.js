// define the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ticket Schema
const ticketSchema = new Schema({
  seat: {type:String, match: /[A-F][1-9]\d?/},
  price: {type:Number, min: 0}
}, {
  timestamps: true
})
// compile into a model
const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "United", "Delta"] },
  airport: {
    type: String,
    enum: ["AUS", "DEN", "JFK", "DFW", "PHX"],
    default: "JFK",
  },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: {
    type: Date,
    default: () => Date.now() + 365 * 24 * 60 * 60 * 1000,
    // + 365 days * hours * minutes * seconds * milliseconds
  },
  tickets: [ticketSchema]
}, {
    timestamps: true
});

// export Schema into a model to peform CRUD Operations on data
module.exports = mongoose.model("Flight", flightSchema);
