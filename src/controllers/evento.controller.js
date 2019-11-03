var Evento = require('../model/Evento');

async function createEvento(req, res) {
    var { evento, descripcion, presentacion, codigo, video, realizado,fecha } = req.body;
    var newEvento = await Evento.create({
        evento: evento, descripcion: descripcion, presentacion: presentacion, codigo: codigo, video: video, fecha:fecha, realizado: realizado
    }, {
        fields: ['evento', 'descripcion', 'presentacion', 'codigo', 'video', 'fecha', 'realizado']
    });
    if (newEvento) {
        res.json({
            message: "Se ha creado el evento satisfactoriamente",
            data: newEvento
        })
    }
}

//Obtener todos los eventos
async function getEventos(req, res) {
    var eventos = await Evento.findAll();
    res.json({
        data: eventos
    });
}

//Obtener evento por ID
async function getEvento(req, res) {
    var { id } = req.params;
    var evento = await Evento.findOne({
        where: {
            id
        }
    });
    res.json({
        data: evento
    });
}
//Obtener evento futuros yo pasados
async function getEventoRealizado(req, res) {
    var { realizado } = req.params;
    var eventos = await Evento.findAll({
        where: {
            realizado
        }
    });
    res.json({
        data: eventos
    });
}

module.exports = { getEventos, getEvento, createEvento,getEventoRealizado };