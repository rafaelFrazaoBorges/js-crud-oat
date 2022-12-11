const Lightsaber = require('../models/lightsaber.model')

const save = async (req, res, next) => {  
    try {
        const data = req.body
        const newLightsaber = new Lightsaber(data)
        const savedLightsaber = await newLightsaber.save()
        if(!savedLightsaber) {
            throw new Error('Lightsaber could not be saved')
        }
        res.status(201).json({
            message: 'Lightsaber saved'
        })

    } catch(err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const lightsabers = await Lightsaber.find()
        res.status(200).json(lightsabers)
    } catch(err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const lightsaber = await Lightsaber.findById(id)
        if(!lightsaber) {
            throw new Error(`Lightsaber with id ${id} not found`)
        }
        res.status(200).json(lightsaber)
    } catch(err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const lightsaber = await Lightsaber.findById(id)
        if(!lightsaber) {
            throw new Error(`Lightsaber with id ${id} not found`)
        }

        const newLightsaber = await Lightsaber.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newLightsaber)
    } catch(err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const lightsaber = await Lightsaber.findById(id)
        if(!lightsaber) {
            throw new Error(`Lightsaber with id ${id} not found`)
        }
        await Lightsaber.findByIdAndDelete(id)
        res.status(200).json({message: `Lightsaber with id ${id} has deleted`})
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

