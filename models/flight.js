// define the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

//export model
