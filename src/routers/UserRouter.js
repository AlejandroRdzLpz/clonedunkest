const express = require('express');
const {UserController} = require('../controllers/index');
const {UserValidator} = require('../validators/index')
const {verifyToken} = require('../middlewares/index')

const router = express.Router();

router.get('/user/:id', UserController.getUser)

router.patch('/user', verifyToken, UserValidator.update, UserController.update)



module.exports = router