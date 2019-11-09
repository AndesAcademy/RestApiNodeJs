var Router = require('express');
var router = new Router();
var UserCrud = require('../controllers/user.controller');

// /api/user/
router.get('/', UserCrud.getAllUsers);


// /api/user/6
router.get('/:id', UserCrud.getUser);

router.post('/', UserCrud.createUser);
router.delete('/:id', UserCrud.deleteUser);
router.put('/:id', UserCrud.updateUser);

module.exports = router;