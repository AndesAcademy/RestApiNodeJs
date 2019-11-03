var { Router } = require('express');
var router = new Router();
var { createEventoUser, getEventoUser } = require('../controllers/eventoUser.controller')

//api/eventoUser/
router.post('/', createEventoUser);
router.get('/', getEventoUser);

module.exports = router;