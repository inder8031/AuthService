const express = require('express');
const UserController = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/user/:id', UserController.getUser);
router.get('users', UserController.getAllUsers);
router.patch('user/:id', UserController.updateUser);
router.delete('user/:id', UserController.deleteUser);

module.exports = router;