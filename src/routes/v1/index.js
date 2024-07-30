const express = require('express');

const UserController = require('../../controllers/user-controller');

const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/users/:id', UserController.getUser);
router.get('/users', UserController.getAllUsers);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;