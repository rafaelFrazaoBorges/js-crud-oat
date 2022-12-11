const mongoose = require('mongoose')

const lightsaberSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    handleType: {
        type: String,
        required: true
    },
    kyberCrystalType: {
        type: String,
        required: false
    },
    kyberCrystalColor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Lightsaber', lightsaberSchema)