const express = require('express');
const config = require('../config.js').get(process.env.NODE_ENV);
const nodeMailer = require('nodemailer');
const randomatic = require('randomatic');
const randString = randomatic('A0a', 7);
const router = express.Router();
const jwt = require('jsonwebtoken');

const ProjectDTO = require('../models/project');
const UserDTO = require('../models/user');

// Routes
// SUBMIT On form submission, generate a temporary user in 'user-temp'.
router.get('/projects', function (req, res) {
    ProjectDTO.find({})
    .select({ 'name': 1, 'projectId': 1, '_id': 0})
    .exec((err, results) => {
        if (results) {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results
            });
        } else {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        }
    });
});

router.get('/projects/:year/:qtr', function (req, res) {
    const year = req.params['year'];
    const quarter = req.params['qtr'];
    var temp = year.toString() + '0' + quarter.toString();
    const date = parseInt(temp);

    ProjectDTO.find({})
    .where('startDate').lte(date)    
    .select({'_id': 0})
    .exec((err, results) => {
        if (results) {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results
            });
        } else {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        }
    });
});

router.get('/users', function (req, res) {
    UserDTO .find({})
    .select({'_id': 0})
    .exec((err, results) => {
        if (results) {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results
            });
        } else {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        }
    });
});

router.get('/users/:empId');

//POST
//Verify hash value from sent link in mail.

module.exports = router;
