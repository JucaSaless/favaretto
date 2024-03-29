var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

