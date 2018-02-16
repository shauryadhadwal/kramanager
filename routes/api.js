const express = require('express');
const config = require('../config.js').get(process.env.NODE_ENV);
const nodeMailer = require('nodemailer');
const randomatic = require('randomatic');
const randString = randomatic('A0a', 7);
const router = express.Router();
const jwt = require('jsonwebtoken');
const async = require('async');

const TRANSPORTER = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass
    }
});

const ProjectDTO = require('../models/project');
const UserDTO = require('../models/user');
const PositionDTO = require('../models/position');

// ----------------------------------------------------------------------------
// PROJECTS
// ----------------------------------------------------------------------------

router.get('/projects', function (req, res) {
    ProjectDTO.find({})
        .select({ '_id': 0 })
        .sort('startDate')
        .exec((err, result) => {
            if (result) {
                res.statusCode = 200;
                res.statusMessage = 'OK'
                res.json({
                    data: result
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

router.get('/projects/:projId', function (req, res) {
    const projectId = req.params['projId'];

    ProjectDTO.find({ projectId: projectId })
        .select({ '_id': 0 })
        .exec()
        .then((results) => {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results.length > 0 ? results : null
            });
        })
        .catch(() => {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        });
});

router.get('/projects/:year/:qtr', function (req, res) {
    const year = req.params['year'];
    const quarter = req.params['qtr'];
    var temp = year.toString() + '0' + quarter.toString();
    const date = parseInt(temp);

    ProjectDTO.find({})
        .where('startDate').lte(date)
        .sort('startDate')
        .select({ '_id': 0 })
        .exec()
        .then((results) => {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results.length > 0 ? results : null
            });
        })
        .catch(() => {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        });
});

// ----------------------------------------------------------------------------
// USERS
// ----------------------------------------------------------------------------

// get all users
router.get('/users', function (req, res) {
    UserDTO.find({})
        .select({ '_id': 0 })
        .exec()
        .then((results) => {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results.length > 0 ? results : null
            });
        })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        });
});

// get USERS by PROJECT ID
router.get('/users/project/:projId', function (req, res) {

    const projectId = req.params['projId'];

    UserDTO.find({})
        .where('projectId').equals(projectId)
        .sort('-positionId')
        .select({ '_id': 0, 'kraCollection': 0, 'emailId': 0, 'projectId': 0 })
        .exec()
        .then((results) => {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results.length > 0 ? results : null
            });
        })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        });
});

// get USER by EMPLOYEE ID
router.get('/users/single/:empId', function (req, res) {
    const employeeId = req.params['empId'];

    UserDTO.find({ empId: employeeId })
        .select({ '_id': 0, 'kraCollection': 0 })
        .exec()
        .then((result) => {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.json({
                data: result
            });
        })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = 'DB ERROR'
            res.json({
                data: null
            });
        });
});

// ----------------------------------------------------------------------------
// KRA
// ----------------------------------------------------------------------------
// get KRA by YEAR and QUARTER
router.get('/kra/:empId/:year/:qtr', function (req, res) {

    const employeeId = req.params['empId'];
    const year = req.params['year'];
    const quarter = req.params['qtr'];

    UserDTO.find(
        { empId: employeeId },
        { kraCollection: { $elemMatch: { year: year } } })
        .select({ '_id': 0 })
        .exec()
        .then((results) => {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            if (results[0].kraCollection[0].quarters[quarter - 1].kra.length > 0) {
                res.json({
                    data: results[0].kraCollection[0].quarters[quarter - 1]
                });
            } else {
                res.json({
                    data: null
                });
            }
        })
        .catch((err) => {
            res.statusCode = 200;
            res.statusMessage = 'No Records Found'
            res.json({
                data: null
            });
        });
});

// Update RATING
router.put('/kra/history', function (req, res) {

    UserDTO.findOne({ empId: req.body.employeeId })
        .exec()
        .then((user) => {
            if (!user) {
                res.statusCode = 200;
                res.statusMessage = 'User not found'
                res.json({
                    data: null
                });
            }
            let yearIndex = user.kraCollection.findIndex(x => x.year == req.body.year);
            let serialIndex = user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra.findIndex(x => x.serial == req.body.kraSerial);
            user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra[serialIndex].history.push(req.body.updatedHistory);
            user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra[serialIndex].rating = req.body.updatedHistory.rating;
            user.save().then(result => {
                res.statusCode = 200;
                res.statusMessage = 'Saved'
                res.json({
                    data: null
                });
                sendKraDetails(res, {
                    name: user.firstName,
                    email: user.emailId,
                    quarter: req.body.quarter,
                    year: req.body.year,
                    kraSerial: req.body.kraSerial,
                    rating: req.body.updatedHistory.rating,
                    comment: req.body.updatedHistory.comment,
                    description: user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra[serialIndex].description
                });
            });
        })
        .catch((err) => {
            res.statusCode = 200;
            res.statusMessage = 'Error in saving'
            res.json({
                data: null
            });
        });
});

const sendKraDetails = function (res, obj) {
    
    let mailOptions = {
        from: 'KRA Manager', // sender address
        to: obj.email, // list of receivers
        subject: 'Your Updated KRA', // Subject line
        text: 'Your Rating has been set or updated', // plain text body
        html: '<b>Hello ' + obj.name + ',</b>'
            + '<p>These are the details for your Kra for <strong>' + obj.year + ' Quarter: ' + obj.quarter + '</strong></p>'
            + '<p><ul><li><strong>Description: </strong>' + obj.description + '</li>'
            + '<li><strong>Rating:  </strong>' + obj.rating + '</li>'
            + '<li><strong>Comment:  </strong>' + obj.comment + '</li></ul></p>'
    };

    TRANSPORTER.sendMail(mailOptions).catch(onRejected => {
        console.log();
    }
    );
}

// ----------------------------------------------------------------------------
// POSITIONS
// ----------------------------------------------------------------------------

router.get('/positions', function (req, res) {
    PositionDTO.find({})
        .select({ '_id': 0 })
        .exec((err, results) => {
            if (results) {
                res.statusCode = 200;
                res.statusMessage = 'OK'
                res.json({
                    data: results.length > 0 ? results : null
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

module.exports = router;
