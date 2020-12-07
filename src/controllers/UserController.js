const {UserService} = require('../services/index.js')
const auth = require('../utils/auth')

module.exports = {
    create: async (req, res) => {
        
        try {
            const {body} = req;

            const exist = await UserService.exists(body.email);

            if (exist) throw new Error('User already exists');

            const payload = await UserService.create(body);

            res.status(201).json({
                success: true,
                payload: payload
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                err: err.message
            })
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await UserService.findOneByEmail(email);

            if (!user) throw new Error('Incorrect ID');

            const sync = auth.comparePasswords(password, user.password);

            if (!sync) throw new Error('Passwords do not match');

            const token = auth.createToken(user);

            res.status(200).json({
                success: true,
                payload: token,
            })

        } catch (err) {
            res.status(404).json({err: err.message})
        }
    },
    update: async (req, res) => {
        try {
            const {decoded, body} = req;
            const user = await UserService.findOneById(decoded.id)
            if(!user) throw new Error('User Not Found');
            const modifiedUser =  await UserService.updateOne(user, body);
            modifiedUser.password = undefined;
            res.status(200).json({
                success: true,
                payload: modifiedUser
            })
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    },
    addTeam: async (req, res) => {
        try {
            const {body, decoded} = req;
            const addTeam = await UserService.addTeam(decoded.id, body)

            res.status(200).json({
                success: true,
                payload: addTeam
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                success: false,
                payload: err.message
            })
        }
    }
}