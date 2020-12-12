const {TeamService} = require('../services/index.js')

module.exports = {
    addTeam: async (req, res) => {
        const {body, decoded} = req;
        try {
            const {is_principal, team_name, players} = body;
            const {id} = decoded;
            const team = await TeamService.addTeam({user_id: id, is_principal, team_name, players});
            res.status(200).send({payload: team})
        } catch (err) {
            res.status(500).json({success: false, payload: err.message});
        }
    },
    deleteTeam: async (req, res) => {
        try {
            const {id} = req.decoded
            const {teamId} = req.params
            const team = await TeamService.findOneById(teamId);
            if (team.user_id !== id) throw new Error(`Bad credentials`)
            const deleteTeam = await TeamService.delete(teamId);
            res.status(200).send({payload: deleteTeam})
        } catch (err) {
            res.status(500).send({err})
        }
    },
    getTeams: async (req, res) => {
        try {
            const {id} = req.decoded;
            const teams = await TeamService.getTeams(id);
            res.status(200).send({teams})
        } catch (err) {
            res.status(500).send({err})
        }
    }
}