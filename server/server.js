// THIS FIRST FUNCTION I JUST COPIED FROM A SOLUTION BUT IT DOES NOT SEEM TO HELP
// routes/index.js
module.exports = (express) => {
  // Create express Router
  var router = express.Router();

  // add routes
  server.route('/hamsters/api/new-hamster')
    .post((req, res) => {
       res.setHeader('Content-Type', 'application/json');
       res.send('You sent: sdadad to Express');
    });

  return router;
}

const express = require('express');
const server = express();
const serverPort = process.env.PORT || 1234;

server.use(express.static(__dirname + '/../build'))

let data = require('./data.json')
const { Router } = require('express');
let router = new Router();

//USE BODY-PARSER BEFORE REGISTERING ROUTES!
const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ROUTES
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts')
const gamesRoute = require('./routes/games')
const statsRoute = require('./routes/stats')
const imagesRoute = require('./routes/images')
const uploadRoute = require('./routes/upload')
    

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