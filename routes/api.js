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
// DASHBOARD
// ----------------------------------------------------------------------------

router.get('/dashboard', function (req, res) {
    let retVal = {
        projects: 0,
        employees: 0,
    }

    async function getDashboardDetails() {
        getUserCount = UserDTO.count({}).exec((err, res) => res);
        getProjectCount = ProjectDTO.count({}).exec((err, res) => res);

        retVal.projects = await getProjectCount;
        retVal.employees = await getUserCount;
    };

    getDashboardDetails().then(success => {
        res.statusCode = 201;
        res.message = 'OK';
        res.json({
            data: retVal
        });
    });
});

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
    UserDTO.aggregate([
        {
            '$lookup': {
                from: 'positions', // collection name in db
                localField: 'positionId',
                foreignField: 'positionId',
                as: 'positionObject'
            }
        },
        {
            '$lookup': {
                from: 'projects', // collection name in db
                localField: 'projectId',
                foreignField: 'projectId',
                as: 'projectObject'
            }
        },
        { '$unwind': '$positionObject' },
        { '$unwind': '$projectObject' },
        {
            '$project': {
                _id: 0,
                name: { $concat: ["$firstName", " ", "$lastName"] },
                empId: 1,
                position: '$positionObject.position',
                project: '$projectObject.name'
            }
        }
    ])
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

// get USERS by PROJECT ID, YEAR, QUARTER
router.get('/users/project/:projId/:year/:qtr', function (req, res) {

    const projectId = req.params['projId'];
    const year = req.params['year'];
    const quarter = req.params['qtr'];

    UserDTO.find({})
        .where('projectId').equals(projectId)
        .sort('-positionId')
        .select({ '_id': 0, 'emailId': 0, 'projectId': 0 })
        .exec()
        .then((results) => {

            // Modify Kra Status for each employee before sending. 
            // Get Kra by Year and Quarter
            results.map(user => {
                let yearIndex = user.kraCollection.findIndex(x => x.year == year);
                let kraCount = user.kraCollection[yearIndex].quarters[quarter - 1].kra.length;
                user.kraSet = true;
                if (kraCount < 1)
                    user.kraSet = false;
            });

            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: results.length > 0 ? results : null
            });
        })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = err.message
            res.json({
                data: null
            });
        });
});

// get USER by EMPLOYEE ID
router.get('/users/single/:empId', function (req, res) {
    const employeeId = req.params['empId'];

    UserDTO.findOne({ empId: employeeId })
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
            res.statusMessage = 'DB ERROR';
            res.json({
                data: null
            });
        });
});

// ----------------------------------------------------------------------------
// KRA
// ----------------------------------------------------------------------------


// get PROJECT with PENDING COMPLETED statuses

router.get('/kra/projects/:year/:qtr', function (req, res) {
    year = req.params['year'];
    quarter = req.params['qtr'];

    async function status() {
        getProjectsList = ProjectDTO.aggregate([{
            '$addFields': {
                'pending': '0',
                'completed': '0'
            }
        }]).exec((err, results) => results);
        projectsList = await getProjectsList;

        getUsersList = UserDTO.find({}).select({ empId: 1, kraCollection: 1, projectId: 1 }).exec((err, users) => users);
        usersList = await getUsersList;

        completeAction = () => {
            for (const user of usersList) {
                let projectIndex = projectsList.findIndex(project => project.projectId === user.projectId);
                let yearIndex = user.kraCollection.findIndex(x => x.year == year);
                let kraCount = user.kraCollection[yearIndex].quarters[quarter - 1].kra.length;
                if (kraCount < 1)
                    projectsList[projectIndex].pending++;
                else
                    projectsList[projectIndex].completed++
            }
            return projectsList;
        }

        updatedProjectsList = await completeAction();
    }

    status().then(success => {
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.json({
            data: updatedProjectsList
        });
    })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = err.message
            res.json({
                data: null
            });
        });

});


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
                    success: true,
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
            res.statusCode = 401;
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

// DELETE Kra
router.delete('/kra/delete/:empId/:year/:qtr/:serial', function (req, res) {
    empId = req.params['empId'];
    year = req.params['year'];
    quarter = req.params['qtr'];
    kraSerial = req.params['serial'];
    UserDTO.findOne({ empId: empId })
        .exec()
        .then(user => {
            if (user) {
                let yearIndex = user.kraCollection.findIndex(x => x.year == year);
                let serialIndex = user.kraCollection[yearIndex].quarters[quarter - 1].kra.findIndex(x => x.serial == kraSerial);
                user.kraCollection[yearIndex].quarters[quarter - 1].kra.splice(serialIndex, 1);
                user.save().then(result => {
                    res.statusCode = 200,
                        res.statusMessage = 'Removed Item',
                        res.json({
                            success: true,
                            data: null
                        });
                });
            }
        })
        .catch(err => {

            res.statusCode = 401,
                res.statusMessage = 'Failed',
                res.json({
                    success: false,
                    data: null
                })
        }
        );
});

// CREATE new KRA
router.put('/kra/create', function (req, res) {
    UserDTO.findOne({ empId: req.body.employeeId })
        .exec()
        .then(user => {
            if (user) {
                let yearIndex = user.kraCollection.findIndex(x => x.year == req.body.year);
                let last = user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra.length;
                let count = 0;
                if (last > 0)
                    count = user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra[last - 1].serial;

                user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra.push(
                    {
                        serial: count + 1,
                        rating: 5,
                        description: req.body.description,
                        history: [{
                            rating: 1,
                            comment: 'Added New KRA',
                            dateChanged: new Date(),
                            fileId: 0
                        }]
                    });

                user.save().then(result => {

                    // send mail
                    sendKraDetails(res, {
                        name: user.firstName,
                        email: user.emailId,
                        quarter: req.body.quarter,
                        year: req.body.year,
                        kraSerial: count + 1,
                        rating: 5,
                        comment: 'Added New KRA',
                        description: req.body.description
                    });

                    res.statusCode = 200;
                    res.statusMessage = 'Added new item';
                    res.json({
                        success: true,
                        data: null
                    });
                });
            }
        })
        .catch(err => {
            res.statusCode = 401;
            res.statusMessage = err.message;
            res.json({
                success: false,
                data: null
            });
        }
        );
})

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

// ----------------------------------------------------------------------------
// ADMIN
// ----------------------------------------------------------------------------

// CREATE new user
router.post('/admin/user', function (req, res) {
    const user = new UserDTO();

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.empId = req.body.empId;
    user.projectId = req.body.projectId;
    user.positionId = req.body.positionId;
    user.emailId = req.body.emailId;
    user.kraCollection = [];
    const year = new Date().getFullYear();
    user.kraCollection.push({
        year: year,
        quarters: [
            { quarter: 1, kra: [] },
            { quarter: 2, kra: [] },
            { quarter: 3, kra: [] },
            { quarter: 4, kra: [] }
        ]
    });

    user.save()
        .then(result => {
            res.statusCode = 200;
            res.statusMessage = 'New User Created';
            res.json({
                success: true,
                data: null
            });
        })
        .catch(err => {
            res.statusCode = 401;
            res.statusMessage = err.message;
            res.json({
                success: false,
                data: null
            });
        }
        );
});



module.exports = router;
