const Ticket = require('../model/ticket');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    res.render('tickets/new', {id: req.params.id });
}

function create(req, res) {
    console.log('the body', req.body)
    req.body.flight = req.params.id
    req.body.price = 0
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) return res.render('tickets/new');
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
    });
}
