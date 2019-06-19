const express = require('express');
const authRouter = express.Router();
const Satoko = require('../models/user.js');
const jwt = require('jsonwebtoken')

// SIGNUP - POST // For backend use only

authRouter.post('/signup', (req, res, next) => {
    Satoko.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user !== null){
            res.status(400)
            return next(new Error('Sorry mum, you already have an account under this name'))
        }
        const newUser = new Satoko(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
        return res.status(201).send({ user: savedUser.withoutPassword(), token })
        })
    })
})

authRouter.post('/login', (req, res, next) => {
    Satoko.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(500)
            return next(new Error('Sorry mum, username or password are incorrect'))
        }
        // Does the user's password attempt match the encrypted password in the DB ?
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // Did the user's password match?  
            if(!isMatch){
                res.status(401)
                return next(new Error('Sorry mum, username or password is incorrect.'))
            }
            // Create/send user token to front-end
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ user: user.withoutPassword(), token })
        })
    })
})

module.exports = authRouter