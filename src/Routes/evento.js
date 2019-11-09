var Router = require('express');
var router = new Router();
var EventoCrud = require('../controllers/evento.controller');

// /api/evento/
router.post("/", EventoCrud.createEvento);
router.get("/", EventoCrud.getAllEventos);
// /api/evento/1
router.get("/:id", EventoCrud.getEvento);
// /api/evento/realizado/1
router.get("/realizado/:realizado", EventoCrud.getEventoRealizado);
// /api/evento/1
router.delete('/:id', EventoCrud.deleteEvento);
router.put('/:id', EventoCrud.updateEvento);

module.exports = router;