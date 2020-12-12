const {celebrate, Joi, Segments} = require('celebrate')

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi
        .object()
        .keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            birth_date: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required(),
        }),
    }),
    login: celebrate({
        [Segments.BODY]: Joi
        .object()
        .keys({
            email: Joi.string().required().email(),
            password: Joi.string().required()
        })
    }),
    update: celebrate({
        [Segments.BODY]: Joi
        .object()
        .keys({
            profile_img: Joi.string(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            birth_date: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string(),
        })
    }),
}