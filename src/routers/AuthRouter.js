const express = require('express');
const {UserController} = require('../controllers/index')
const {UserValidator} = require('../validators/index')



const router = express.Router();

router.post('/login', UserValidator.login, UserController.login);
router.post('/signup', UserValidator.create, UserController.create);

module.exports = router;
