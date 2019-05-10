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
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ user: savedUser.toObject(), token })
        })
    })
})

authRouter.post('/login', (req, res, next) => {
    Satoko.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user || user.password !== req.body.password){
            res.status(500)
            return next(new Error('Sorry mum, username or password are incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ user: user.toObject(), token })
    })
})

module.exports = authRouter