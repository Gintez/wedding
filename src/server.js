'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/wedding');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use(express.static('public'));

app.get('/:guestUri', function(req, res) {
    console.log("URI: " + req.params.guestUri);
    res.render('../public/index.pug', { title: 'Justai ir Kamile', guestUri: req.params.guestUri });
});

app.post('/attendance', function(req, res) {
    console.log(req.body);
    res.send("Success: " + req.body.guests + " " + req.body.vegetarians + " " + req.body.song + " " + req.body.guestUri);
});

// Start the server
app.listen(8081);
console.log('app is listening on port: 8081');