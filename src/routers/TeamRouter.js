const express = require('express');
const {UserController} = require('../controllers/index');
const {TeamController} = require('../controllers/index')
const {TeamValidator} = require('../validators/index')
const {verifyToken} = require('../middlewares/index')

const router = express.Router();

router.post('/createTeam', verifyToken, TeamValidator.addTeam, TeamController.addTeam, UserController.addTeam)

router.get('/teams', verifyToken, TeamController.getTeams)


module.exports = router