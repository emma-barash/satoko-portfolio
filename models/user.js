const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
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

// Define user Hooks and Methods - Password Encryption
userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

// Check password
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

// Removes user's hashed password from user object before
    // adding user object as payload token
    // sending the user object back to the front-end
userSchema.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password
    return user
}

module.exports = mongoose.model("Satoko", userSchema)