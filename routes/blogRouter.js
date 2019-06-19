const express = require('express');
const blogRouter = express.Router();
const Blog = require('../models/blogPost.js');

// POST BLOG POSTS
blogRouter.post('/', (req, res, next) => {
    const newBlogPost = new Blog(req.body)
    newBlogPost.save((err, savedBlogPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBlogPost)
    })
})

// GET BLOG POSTS
blogRouter.get('/', (req, res, next) => {
    Blog.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// DELETE BLOG POSTS
blogRouter.delete('/:_id', (req, res, next) => {
    Blog.findOneAndRemove( { _id: req.params._id }, 
        (err, deletedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedPost)
    })
})

// UPDATE BLOG POSTS
blogRouter.put('/:_id', (req, res, next) => {
    Blog.findOneAndUpdate( { _id: req.params._id },
        req.body, (err, blogToUpdate) => {
           if(err){
               res.status(500)
               return next(err)
           } 
           return res.status(201).send(blogToUpdate)
        }
        )
})

module.exports = blogRouter