
const express = require('express');
const server = express();
const serverPort = process.envPORT /*|| 1234*/;

server.use(express.static(__dirname + '/../build'))

let data = require('./data.json')
const { Router } = require('express');
let router = new Router();

// ROUTES
const bodyParser = require('body-parser')
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts')
const gamesRoute = require('./routes/games')
const statsRoute = require('./routes/stats')
const imagesRoute = require('./routes/images')
const uploadRoute = require('./routes/upload')
    
server.use(bodyParser.json())
server.use('/assets', express.static("assets"))
server.use(express.static('public'))

server.use('/hamsters', hamstersRoute)
server.use('/charts', chartsRoute)
server.use('/games', gamesRoute)
server.use('/stats', statsRoute)
server.use('/images', imagesRoute)
server.use('/upload', uploadRoute)

server.listen(serverPort, () => {
    console.log(`Server is up n running on port ${serverPort}!`)
})

module.exports = data;