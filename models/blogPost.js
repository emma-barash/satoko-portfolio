const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
    },
    // Include firebase images here
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', blogSchema)