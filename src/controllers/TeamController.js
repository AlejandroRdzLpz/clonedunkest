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
}