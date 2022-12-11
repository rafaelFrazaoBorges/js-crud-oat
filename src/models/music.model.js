const mongoose = require('mongoose')

const musicSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Music', musicSchema)