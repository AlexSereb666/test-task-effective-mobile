const Router = require('express');
const router = new Router();

const userController = require('../controllers/userController');

router.get('/', userController.getListUsers);
router.put('/:id', userController.editUser);
router.post('/', userController.createUser);

module.exports = router;
