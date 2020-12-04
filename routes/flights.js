var express = require('express');
const { route } = require('.');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.create)

module.exports = router;
