const {Team} = require('../models/index')
const {User} = require('../models/index')

module.exports = {
    find: (id) => User.findById(id),
    addTeam: (team) => new Team(team).save(),
    deleteTeam: (id) => Team.findByIdAndDelete(id),
    getTeams: (id) => Team.find({user_id: id})
}