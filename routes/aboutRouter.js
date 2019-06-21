const express = require('express');
const aboutRouter = express.Router();
const About = require("../models/about");

aboutRouter.get('/', (req, res, next) => {
    About.find((err, allAbout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allAbout)
    })
})

aboutRouter.post('/', (req, res, next) => {
    const newAbout = new About(req.body)
    newAbout.save((err, newestAbout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newestAbout);
    })
})

aboutRouter.delete('/:_id', (req, res, next) => {
    About.findOneAndRemove({ _id: req.params._id }, (err, deletedAbout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedAbout);
    })
})

aboutRouter.put('/:_id', (req, res, next) => {
    About.findOneAndUpdate({ _id: req.params._id }, req.body, (err, updatedAbout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedAbout);
    })
})

module.exports = aboutRouter;