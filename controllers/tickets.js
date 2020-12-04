const Flight = require('../models/flight')

module.exports = {
    create,
    delete: deleteTicket,
}
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.tickets.push(req.body)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function deleteTicket(req, res){
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect(`/flights/${flight._id}`)
    })
}