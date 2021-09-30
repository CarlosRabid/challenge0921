const express = require('express')
let server = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

// const chartRoutes = require('./server/ChartRoute')

// server.use(express.static('node_modules'));
server.use(express.static(path.join(__dirname, 'build')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/challenge0921', { useNewUrlParser: true })

const new_api = require('./server/routes/api')

// Set Api Routes
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

server.use('/', new_api)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 7777
server.listen( PORT, () => console.log(`Running on port ${PORT}`))
