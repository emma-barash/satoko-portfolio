const mongoose = require('mongoose');
const Schema = mongoose.Schema

const aboutSchema = new Schema ({
    title: {
        type: String
    },
    content: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("About", aboutSchema)