const {User} = require('../models/index')
// I needed to get it out of this {} brackets for it to work properly

module.exports = {
    create: (body) => new User(body).save(),
    exists: (email) => User.exists({email}),
    findOneByEmail: (email) => User.findOne({email}),
    findOneById: (id) => User.findById(id),
    updateOne: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
    get: (id) => User.findById(id)
}