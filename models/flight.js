// define the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema

// compile into a model
const flightSchema = new Schema ({
 airline: {type:String,enum:['American', 'United', 'COPA']},

})

//export model
