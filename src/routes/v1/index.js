const express = require('express');

const UserController = require('../../controllers/user-controller');
const { validateUserAuthMiddleware } = require('../../middlewares/index');

const router = express.Router();

router.post('/signup', validateUserAuthMiddleware.validateUserAuth, UserController.createUser);
router.post('/signIn', validateUserAuthMiddleware.validateUserAuth, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);
router.get('/users/:id', UserController.getUser);
router.get('/users', UserController.getAllUsers);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;