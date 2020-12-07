const {Schema, model} = require('mongoose');

const teamSchema = new Schema({
    team_logo: {
        type: String,
        default: '',
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    is_principal: {
        type: Boolean,
        default: true,
    },
    team_name: {
        type: String,
        required: true,
    },
    players: [{
        _id: Schema.Types.ObjectId,
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

const Team = model('Team', teamSchema, "Teams")

module.exports = Team;