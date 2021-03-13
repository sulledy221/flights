const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id', flightsCtrl.update);

module.exports = router;