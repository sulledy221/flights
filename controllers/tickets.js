const Ticket = require('../model/ticket');

const yearFromNow = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return new Date(year + 1, month, day);
}
module.exports = {
    new: newTicket,
    create
};


function newFlight(req, res) {
    res.render('tickets/new');
}

function create(req, res) {
    console.log('the body', req.body)
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });

}
