const mongoose = require('mongoose');
const Schema = mongoose.Schema

const imageSchema = new Schema({
    imgUrl: String
})

module.exports = mongoose.model('Image', imageSchema)