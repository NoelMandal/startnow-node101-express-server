// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req,res) {
    res.status(200).send('hello');
});

app.get('/data', function(req,res) {
    res.status(200).json(data);
});

    // finally export the express application
module.exports = app;
