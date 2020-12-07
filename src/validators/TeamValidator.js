const {celebrate, Joi, Segments} = require('celebrate')

module.exports = {
    addTeam: celebrate({
        [Segments.BODY]: Joi
        .object()
        .keys({
            user_id: Joi.number(),
            is_principal: Joi.boolean().required(),
            team_name: Joi.string().required(),
            players: Joi.array().required(),
        }),
    }),
}