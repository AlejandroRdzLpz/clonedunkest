const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    comparePasswords: (reqPassword, hashPassword) => bcrypt.compareSync(reqPassword, hashPassword),
    createToken: ({id, email, first_name}) => {
            const payload = {
                id: id,
                email: email,
                first_name: first_name,
            };

            const token = jwt.sign(payload, process.env.PRIVATE_KEY, {expiresIn: '1h'})

            return token
    }
}