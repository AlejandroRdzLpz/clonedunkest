const {celebrate, Joi, Segments} = require('celebrate')

module.exports = {
    addTeam: celebrate({
        [Segments.BODY]: Joi
        .object()
        .keys({
            is_principal: Joi.boolean().required(),
            team_name: Joi.string().required(),
            players: Joi.array().required(),
        }),
    }),
    delete: celebrate({
    [Segments.PARAMS]: Joi
      .object()
      .keys({
        postId: Joi.string().required(),
      }),
  }),
}