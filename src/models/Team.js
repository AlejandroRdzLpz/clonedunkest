const {Schema, model} = require('mongoose');

const teamSchema = new Schema({
    team_logo: {
        type: String,
        default: '',
    },
    is_principal: {
        type: Boolean,
        default: true,
    },
    team_name: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    players: [{
        player_photo: String,
        player_number: String,
        first_name: String,
        last_name: String,
        position: String,
        height_feet: Number,
        weight_pounds: Number,
    }],
},
{timestamps: true},
);

const Team = model('Teams', teamSchema)

module.exports = Team;