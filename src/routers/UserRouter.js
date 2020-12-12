const express = require('express');
const {UserController} = require('../controllers/index');
const {UserValidator} = require('../validators/index')
const {verifyToken} = require('../middlewares/index')

const router = express.Router();

router.patch('/users', verifyToken, UserValidator.update, UserController.update)



module.exports = router