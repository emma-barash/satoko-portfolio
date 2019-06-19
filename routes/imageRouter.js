const express = require('express');
const imageRouter = express.Router();
const Image = require('../models/image');

imageRouter.post('/', (req, res, next) => {
    const newImage = new Image(req.body);
    newImage.save((err, savedImage) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedImage)
    })
})

imageRouter.get('/', (req, res, next) => {
    Image.find((err, image) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(image)
    })
})

imageRouter.delete('/:_id', (req, res, next) => {
    Image.findOneAndRemove({ _id: req.params._id },
        (err, deletedImage) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedImage)
        })
})

module.exports = imageRouter;