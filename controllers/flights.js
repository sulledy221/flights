const Flight = require('../model/flight');
const Ticket = require('../model/ticket');


const yearFromNow = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return new Date(year + 1, month, day);
}
module.exports = {
    index,
    new: newFlight,
    create,
    show,
    update
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        console.log('what are the flights', flights)
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    if (req.body.departs) {
        req.body.departs = new Date(req.body.departs);
    } else {
        req.body.departs = yearFromNow()
    }
    console.log('the body', req.body)
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });

}
function show(req, res) {
    Flight.findById( req.params.id , function (err, flight) {
        console.log('flight', flight)
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            console.log('ticket ', tickets)
            res.render('flights/show', { flight, tickets });
        });
    });
}
function update(req, res) {
    Flight.findByIdAndUpdate({ _id: req.params.id }, { $push: { destination: req.body } }, function (err, result) {
        if (err) {
            console.log('err', err)
            res.send(err)
        } else {
            console.log('result', result)
            Flight.find({ _id: req.params.id }, function (err, flight) {
                console.log('flight', flight)
                res.render('flights/show', { flight: flight[0] });
            });
        }
    })
}