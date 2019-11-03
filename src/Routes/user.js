var Router = require('express');
var router = new Router();
var UserDao = require('../controllers/user.controller');

// /api/user/
router.get('/', UserDao.getAllUsers);


// /api/user/6
router.get('/:id', UserDao.getOne);
 
router.post('/',UserDao.createUser);
router.delete('/:id',UserDao.deleteUser);
router.put('/:id',UserDao.updateUser);

module.exports = router;