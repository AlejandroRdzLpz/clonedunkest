const express = require('express');
const {UserController} = require('../controllers/index');
const {TeamController} = require('../controllers/index')
const {TeamValidator} = require('../validators/index')
const {verifyToken} = require('../middlewares/index')

const router = express.Router();

router.post('/createTeam', verifyToken, TeamController.addTeam)

router.delete('/teams/:id', verifyToken, TeamValidator.delete, TeamController.deleteTeam)

module.exports = router