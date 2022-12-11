const Music = require('../models/music.model')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newMusic = new Music(data)
        const savedMusic = await newMusic.save()
        if(!savedMusic) {
            throw new Error('Song could not be saved')
        }
        res.status(201).json({
            message: 'New song stats saved 🎶'
        })

    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const musics = await Music.find()
        res.status(200).json(musics)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const music = await Music.findById(id)
        if(!music) {
            throw new Error(`Song with id ${id} not found`)
        }
        res.status(200).json(music)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const music = await Music.findById(id)
        if(!music) {
            throw new Error(`Song with id ${id} not found`)
        }

        const newMusic = await Music.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newMusic)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const music = await Music.findById(id)
        if(!music) {
            throw new Error(`Song with id ${id} not found`)
        }
        await Music.findByIdAndDelete(id)
        res.status(200).json({message: `Song with id ${id} has deleted`})
    } catch(err) {
        next(err)
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}

