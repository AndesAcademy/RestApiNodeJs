var EventoUser = require('../model/EventoUser');


async function createEventoUser(req, res) {
    var { id_user, id_evento } = req.body;
    var newEventoUser = await EventoUser.create({
        id_user, id_evento
    }, {
        fields: ['id_user', 'id_evento']
    });
    if (newEventoUser) {
        res.json({
            message: "Se ha registrado el usuario en el evento",
            data: newEventoUser
        })
    }
}

async function getEventoUser(req, res) {
    var regs = await EventoUser.findAll();
    res.json(regs);
}

module.exports = { createEventoUser,getEventoUser } 