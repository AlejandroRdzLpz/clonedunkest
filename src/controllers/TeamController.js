const {TeamService} = require('../services/index.js')

module.exports = {
    addTeam: async (req, res, next) => {
        
        try {
            const {body} = req;

            const payload = await TeamService.addTeam(body);

            next()
        } catch (err) {
            res.status(400).json({
                success: false,
                err: err.message
            })
        }
    },
    getTeams: async (req, res) => {
        try {
            const {decoded} = req;
            const teams = await TeamService.getTeams(decoded.id);
            console.log(teams)

            res.status(200).json({
                success: true,
                payload: teams.teams
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: err.message
            })
        }
    }
}