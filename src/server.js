'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Guest = require('./guest');

mongoose.connect('mongodb://localhost:27017/wedding', {
    useMongoClient: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use(express.static('public'));

app.get('/v1/admin', function (req, res) {
    if (req.query.key !== 'temp') {
        res.send(req.query);
        return;
    }

    Guest.find(function (error, result) {

        if (error) {
            res.send('Encountered database error');
            return;
        }

        const attending = result.map(function (guest) {
            return guest.guests;
        }).reduce(function (sum, value) {
            return sum + value;
        }, 0);

        const vegetarians = result.map(function (guest) {
            return guest.vegetarians;
        }).reduce(function (sum, value) {
            return sum + value;
        }, 0);

        const songs = result.map(function (guest) {
            if (guest.song) {
                return guest.song;
            }
        }).filter(function (song) {
            return song;
        });

        res.render('../public/admin/admin.pug', {
            guests: result,
            attending: attending,
            vegetarians: vegetarians,
            songs: songs
        });
    });
});

app.get('/:guestUri', function (req, res) {
    Guest.findOne({uri: req.params.guestUri}, function (error, result) {
        if (error || !result) {
            res.send('Guest not found');
            return;
        }
        res.render('../public/index.pug', {guest: result});
    });
});

app.post('/attendance', function (req, res) {
    Guest.update({_id: req.body.id}, {
        $set: {
            guests: req.body.guests,
            vegetarians: req.body.vegetarians,
            song: req.body.song,
            submitted: true
        }
    }, function (error, result) {
        if (error) {
            res.status(400);
            res.send('Failed to update attendant');
            return;
        }
        res.status(200);
        res.send('Successfully updated');
    });
});

// Start the server
app.listen(8081);
console.log('app is listening on port: 8081');