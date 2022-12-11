const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/utils/db')
const musicRouter = require('./src/routes/musics.route')
const lightsaberRouter = require('./src/routes/lightsabers.route')
const userRouter = require('./src/routes/users.route')
const port = 3000
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('oat-api is running')
})

app.use ('/api/v1/musics', musicRouter)
app.use('/api/v1/lightsabers', lightsaberRouter)
app.use('/api/v1/users', userRouter)

app.use((error, req, res, next) => {
    console.log('ERRO', error) 
    res.status(500).json({errorMessage: error.message})
 })


app.listen(port, () => {
    console.log(`oat-api running on http://localhost:${port}`)
})