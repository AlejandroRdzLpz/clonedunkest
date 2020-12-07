const {Team} = require('../models/index')

module.exports = {
    addTeam: (body) => new Team(body).save()
}