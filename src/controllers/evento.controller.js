var Evento = require('../model/Evento');

async function createEvento(req, res) {
    var { evento, descripcion, presentacion, codigo, video, realizado, fecha } = req.body;
    try {
        var newEvento = await Evento.create({
            evento: evento, descripcion: descripcion, presentacion: presentacion, codigo: codigo, video: video, fecha: fecha, realizado: realizado
        }, {
            fields: ['evento', 'descripcion', 'presentacion', 'codigo', 'video', 'fecha', 'realizado']
        });
        if (newEvento) {
            res.json(newEvento)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creando el evento",
            data: {}
        })
    }
}

//Obtener todos los eventos
async function getAllEventos(req, res) {
    var eventos = await Evento.findAll();
    res.json(eventos);
}

//Obtener evento por ID
async function getEvento(req, res) {
    var { id } = req.params;
    var evento = await Evento.findOne({
        where: {
            id
        }
    });
    res.json(evento);
}

async function deleteEvento(req, res) {
    var { id } = req.params;
    var rowCount = await Evento.destroy({
        where: {
            id
        }
    })
    res.json(rowCount);
}
//Obtener evento futuros yo pasados
async function getEventoRealizado(req, res) {
    var { realizado } = req.params;
    var eventos = await Evento.findAll({
        where: {
            realizado
        }
    });
    res.json(eventos);
}

async function updateEvento(req, res) {
    var { id } = req.params;
    var { evento, descripcion, presentacion, codigo, video, fecha, realizado } = req.body;
    var eventoUp = await Evento.findOne({
        where: {
            id
        }
    });
    eventoUp.update({
        evento, descripcion, presentacion, codigo, video, fecha, realizado
    });
    res.json(eventoUp);
}


module.exports = { getAllEventos, getEvento, createEvento, getEventoRealizado, deleteEvento, updateEvento };