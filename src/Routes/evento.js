var Router = require('express');
var router = new Router();
var { getEventos, getEvento, createEvento, getEventoRealizado } = require('../controllers/evento.controller');

// /api/evento/
router.post("/", createEvento);
router.get("/", getEventos);
// /api/evento/1
router.get("/:id", getEvento);
// /api/evento/realizado/1
router.get("/realizado/:realizado", getEventoRealizado);
// /api/evento/1

module.exports = router;