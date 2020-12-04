// requiring flight model into our controllers so we can access it.
const Flight = require('../models/flight')

module.exports = {
  new: newFlight,
  create

}

function newFlight(req, res){
  res.render('flights/new')
}

function create(req, res){

}