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
for(let key in req.body){
  if(req.body[key] === '') delete req.body[key]
}
const flight = new Flight(req.body)
flight.save(function(err) {
  if(err) {
    return res.render('flights/new',{err:err, title: 'Add Flight'})
  }
  console.log(flight);
  res.redirect('/flights',{title: 'Flights'})
})
}