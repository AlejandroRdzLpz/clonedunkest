const {Team} = require('../models/index')
const {User} = require('../models/index')

module.exports = {
    addTeam: (body) => new Team(body).save(),
    getTeams: (id) => {
        const user = User.findById(id);
        return user
    },
}