// requiring flight model into our controllers so we can access it.
const Flight = require('../models/flight')

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  delete: deleteOne
}

function newFlight(req, res){
  res.render('flights/new', {err: '', title: 'New Flight'})
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
  res.redirect('/flights')
})
}
function index(req, res){
  Flight.find({}, function(err, flights){
      res.render('flights/index', {flights:flights, title: 'All Flights'})
  })
}
function show(req,res){
  Flight.findById(req.params.id)
  .populate('airport')
  .then((flight) => {
    res.render('flights/show', {title: 'Flight Details', flight})
  }).catch((err) => {
        console.log(err)
      })
}
