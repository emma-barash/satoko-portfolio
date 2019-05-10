const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAuth: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Satoko", userSchema)