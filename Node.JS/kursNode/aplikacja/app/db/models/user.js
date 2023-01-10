const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email jest wymagany'],
        lowercase: true,
        trime: true,
        unique: [true, 'ten adres email jest juz zajęty'],
    },
    password: {
        type: String,
        required: true,
    }
});