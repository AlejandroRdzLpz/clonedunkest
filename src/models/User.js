const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')

const SALT_GENERATOR = 6

const userSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    birth_date: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profile_img: {
        type: String,
        default: 'http://picsum.photos/200/300',
    },
    teams: [{
            type: Schema.Types.ObjectId,
            ref: 'teams'
        }],
    leagues: [{
        type: Schema.Types.ObjectId,
        ref: 'leagues'
    }],
},
{timestamps: true},
);

userSchema.pre('save', async function() {
    try {
        const user = this;
        
        if(!user.isModified('password')) return next();

        const salt = await bcrypt.genSalt(SALT_GENERATOR);
        const hash = await bcrypt.hash(user.password, salt)

        user.password = hash;
        console.log(user.password)
        return next()
    } catch (err) {
        
    }
})

const User = model('User', userSchema, 'Users')

module.exports = User;