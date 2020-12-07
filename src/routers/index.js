const express = require('express');
const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');
const TeamRouter = require('./TeamRouter');

const router = express.Router();

router.use(UserRouter)
router.use(AuthRouter)
router.use(TeamRouter)

module.exports = router