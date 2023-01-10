const e = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { validateEmail } = require('../validators');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email jest wymagany'],
        lowercase: true,
        trime: true,
        unique: true,
        validate: [validateEmail, 'Email nie prawdiłowy!'],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Hasło powinno posiadać minimum 4 znaki'],
    }
});

userSchema.post('save', function(error, doc, next){
    if (error.code === 11000) {
        error.errors = { email: {message: 'Taki email jest już zajęty'}};
    }
    next(error);
});

const User = mongoose.model('User', userSchema);

module.exports = User;