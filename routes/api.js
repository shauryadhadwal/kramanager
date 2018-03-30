const express = require('express');
const config = require('../config.js').get(process.env.NODE_ENV);
const nodeMailer = require('nodemailer');
const randomatic = require('randomatic');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const Email = require('email-templates');
const path = require('path');
const fs = require('fs');

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
const CredentialDTO = require('../models/credential');
const RoleDTO = require('../models/role');
const PortfolioDTO = require('../models/portfolio');
const ROLES = require('../resources/roles-enum');

// ----------------------------------------------------------------------------
// LOGIN
// ----------------------------------------------------------------------------

router.post('/login',
    // Check database
    function (req, res) {
        try {
            bytes = crypto.AES.decrypt(req.body.cipher, process.env.AES_KEY);
            decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));

            employeeId = parseInt(decryptedData.empId, 10);
            password = decryptedData.password;

        } catch (error) {
            console.error(error.message);
            res.json({
                success: false,
                loginFailType: 'not encrypted',
                message: 'Contact admin'
            });
        }

        checkLoginCredentials(employeeId, password).then(obj => {
            if (obj.success === true) {
                getUserDetails(employeeId)
                    .then(result => {
                        if (result) {

                            jwt.sign(
                                {
                                    empId: employeeId,
                                    roles: result.roles
                                },
                                process.env.JWT_SECRET, { expiresIn: "60m" },
                                function (err, token) {
                                    res.message = 'Verified';
                                    res.json({
                                        success: true,
                                        data: { jwt_token: token, userData: result }
                                    });
                                });
                            return null;
                        }
                        else {
                            res.json({
                                success: false,
                                loginFailType: 'Could not fetch user object',
                                message: 'Contact admin',
                                data: null
                            });
                        }
                    })
                    .catch(err => {
                        res.json({
                            success: false,
                            loginFailType: obj.loginFailType,
                            message: obj.message,
                            data: null
                        });
                        return null
                    });
            }
            // Passwords do not match
            else {
                res.statusCode = 201;
                res.message = 'OK';
                res.json({
                    success: false,
                    loginFailType: obj.loginFailType,
                    message: obj.message,
                    data: null
                });
            }
            return null;
        });
    });

async function checkLoginCredentials(empId, password) {
    const retVal = await CredentialDTO.findOne({ empId: empId })
        .exec()
        // Account Found
        .then(result => {
            if (result.password === password) {
                return { success: true, loginFailType: 'None, Passwords match' };
            }
            return { success: false, loginFailType: 'password', message: 'Wrong Password' };;
        })
        // Account Not Found
        .catch(err => {
            return { success: false, loginFailType: 'id', message: 'User does not exist' };
        });

    return retVal;
}

// ----------------------------------------------------------------------------
// PASSWORD
// ----------------------------------------------------------------------------

router.get('/password/reset/sendVerification/:id', function (req, res) {
    employeeId = req.params['id'];
    UserDTO.findOne({ empId: employeeId }).exec().then(user => {
        const code = randomatic('A0a', 5);
        // set code in database
        setVerificationCode(user.empId, code);
        // send verfication mail
        sendVerficationMail(user.emailId, code);

        res.json({
            success: true,
            data: {
                emailId: user.emailId,
                empId: user.empId
            }
        })
    }).catch(err => {
        res.statusMessage = 'No User Found'
        res.json({
            success: false,
            data: null
        })
    });
});

function setVerificationCode(empId, code) {
    CredentialDTO.findOne({ empId: empId }).exec().then(credential => {
        credential.verificationCode = code;
        credential.isPasswordResetRequest = true;
        credential.save();
    }).catch(err => {
        newCred = new CredentialDTO();
        newCred.empId = empId;
        newCred.isPasswordResetRequest = true;
        newCred.verificationCode = code;
        newCred.password = 'newPassword';
        newCred.roles = ["basic"];
        newCred.save();
    });
}

const sendVerficationMail = (emailId, code) => {
    let mailOptions = {
        from: 'KRA Manager', // sender address
        to: emailId, // list of receivers
        subject: 'Password Reset Request', // Subject line
        text: 'Use this OTP to set your new password', // plain text body
        html: '<p style="font-size: 40px;">OTP: <strong >' + code + '</strong></p>'
    };

    TRANSPORTER.sendMail(mailOptions).catch(onRejected => {
        console.log();
    });
};

router.post('/password/reset', function (req, res, next) {

    try {
        bytes = crypto.AES.decrypt(req.body.cipher, process.env.AES_KEY);
        decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    } catch (error) {
        console.error(error.message);
    }

    const employeeId = decryptedData.empId;
    const code = decryptedData.verificationCode;
    const newPassword = decryptedData.newPassword;

    CredentialDTO.findOne({ empId: employeeId }).exec().then(credential => {
        if (credential.isPasswordResetRequest) {
            if (code === credential.verificationCode) {
                credential.password = newPassword;
                credential.isPasswordResetRequest = false;
                credential.verificationCode = '';
                credential.save().then(result => {
                    res.json({
                        success: true,
                        data: null
                    });
                }).catch(err => {
                    res.message = err.message;
                    res.json({
                        success: false,
                        data: null
                    });
                });
            }
        }
    }).catch(err => {
        res.statusCode = 401;
        res.message = 'Password Reset Fail';
        res.json({
            success: false,
            data: null
        });
    });
});

// ----------------------------------------------------------------------------
// DASHBOARD
// ----------------------------------------------------------------------------

router.get('/dashboard/:id', function (req, res) {
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

    ProjectDTO.findOne({ projectId: projectId })
        .select({ '_id': 0, })
        .exec()
        .then((result) => {
            res.statusCode = 200;
            res.statusMessage = 'OK'
            res.json({
                data: result ? result : null
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
        { '$unwind': { path: '$positionObject', preserveNullAndEmptyArrays: true } },
        { '$unwind': { path: '$projectObject', preserveNullAndEmptyArrays: true } },
        {
            '$sort': {
                projectId: 1,
                positionId: -1
            }
        },
        {
            '$project': {
                _id: 0,
                name: { $concat: ["$firstName", " ", { $ifNull: ["$lastName", ""] }] },
                empId: 1,
                position: '$positionObject.position',
                project: { $ifNull: ['$projectObject.name', 'none'] }
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

// USER OBJECT on LOGIN
router.get('/users/complete/:empId', function (req, res) {
    const employeeId = parseInt(req.params['empId'], 10);

    UserDTO.aggregate([
        // single document
        {
            '$match': { empId: employeeId }
        },
        // POSITION
        {
            '$lookup': {
                from: 'positions', // collection name in db
                localField: 'positionId',
                foreignField: 'positionId',
                as: 'positionObject'
            }
        },
        { '$unwind': '$positionObject' },
        {
            '$addFields': { positionName: '$positionObject.position' }
        },
        // PROJECT
        {
            '$lookup': {
                from: 'projects', // collection name in db
                localField: 'projectId',
                foreignField: 'projectId',
                as: 'projectObject'
            }
        },
        { '$unwind': '$projectObject' },
        {
            '$addFields': {
                projectName: '$projectObject.name',
                projectLeadId: '$projectObject.teamLeadId',
                projectManagerId: '$projectObject.managerId'
            }
        },
        // TEAM LEAD
        {
            '$lookup': {
                from: 'users', // collection name in db
                localField: 'projectLeadId',
                foreignField: 'empId',
                as: 'teamLeadObject'
            }
        },
        { '$unwind': { path: '$teamLeadObject', preserveNullAndEmptyArrays: true } },
        // MANAGER
        {
            '$lookup': {
                from: 'users', // collection name in db
                localField: 'projectManagerId',
                foreignField: 'empId',
                as: 'projectManagerObject'
            }
        },
        { '$unwind': { path: '$projectManagerObject', preserveNullAndEmptyArrays: true } },

        // Roles
        {
            '$lookup': {
                from: 'credentials',
                localField: 'empId',
                foreignField: 'empId',
                as: 'credentialsObject'
            }
        },
        { '$unwind': { path: '$credentialsObject', preserveNullAndEmptyArrays: true } },
        {
            '$project': {
                _id: 0,
                name: { $concat: ["$firstName", " ", { $ifNull: ["$lastName", ""] }] },
                email: 1,
                empId: 1,
                positionId: 1,
                positionName: '$positionObject.position',
                projectId: 1,
                projectName: '$projectObject.name',
                projectLeadId: '$projectObject.teamLeadId',
                projectLeadName: { $concat: ["$teamLeadObject.firstName", " ", { $ifNull: ["$teamLeadObject.lastName", ""] }] },
                projectManagerName: { $concat: ["$projectManagerObject.firstName", " ", { $ifNull: ["$projectManagerObject.lastName", ""] }] },
                roles: '$credentialsObject.roles'
            }
        }
    ]).exec()
        .then(results => {
            if (results.length === 1) {
                res.json({
                    success: true,
                    data: results[0]
                });
            }
            else {
                res.json({
                    success: false,
                    data: null
                });
            }
        })
        .catch(err => {
            res.json({
                success: false,
                message: err.message
            })
        });
});

async function getUserDetails(employeeId) {

    const retVal = await UserDTO.aggregate([
        // single document
        {
            '$match': { empId: employeeId }
        },
        // POSITION
        {
            '$lookup': {
                from: 'positions', // collection name in db
                localField: 'positionId',
                foreignField: 'positionId',
                as: 'positionObject'
            }
        },
        { '$unwind': { path: '$positionObject', preserveNullAndEmptyArrays: true } },
        {
            '$addFields': { positionName: '$positionObject.position' }
        },
        // PROJECT
        {
            '$lookup': {
                from: 'projects', // collection name in db
                localField: 'projectId',
                foreignField: 'projectId',
                as: 'projectObject'
            }
        },
        { '$unwind': { path: '$projectObject', preserveNullAndEmptyArrays: true } },
        {
            '$addFields': {
                projectName: '$projectObject.name',
                projectLeadId: '$projectObject.teamLeadId',
                projectManagerId: '$projectObject.managerId'
            }
        },
        // TEAM LEAD
        {
            '$lookup': {
                from: 'users', // collection name in db
                localField: 'projectLeadId',
                foreignField: 'empId',
                as: 'teamLeadObject'
            }
        },
        { '$unwind': { path: '$teamLeadObject', preserveNullAndEmptyArrays: true } },
        // MANAGER
        {
            '$lookup': {
                from: 'users', // collection name in db
                localField: 'projectManagerId',
                foreignField: 'empId',
                as: 'projectManagerObject'
            }
        },
        { '$unwind': { path: '$projectManagerObject', preserveNullAndEmptyArrays: true } },
        // Roles
        {
            '$lookup': {
                from: 'credentials',
                localField: 'empId',
                foreignField: 'empId',
                as: 'credentialsObject'
            }
        },
        { '$unwind': { path: '$credentialsObject', preserveNullAndEmptyArrays: true } },
        {
            '$project': {
                _id: 0,
                name: { $concat: ["$firstName", " ", { $ifNull: ["$lastName", ""] }] },
                emailId: 1,
                empId: 1,

                positionId: 1,
                positionName: '$positionObject.position',

                projectId: 1,
                projectName: { $ifNull: ["$projectObject.name", "Not assigned"] },

                projectLeadId: '$projectObject.teamLeadId',
                projectLeadName:
                    {
                        $ifNull: [
                            { $concat: ["$teamLeadObject.firstName", " ", { $ifNull: ["$teamLeadObject.lastName", ""] }] },
                            "Not Assigned"
                        ]
                    },

                projectManagerId: '$projectManagerObject.empId',
                projectManagerName: {
                    $ifNull: [
                        { $concat: ["$projectManagerObject.firstName", " ", { $ifNull: ["$projectManagerObject.lastName", ""] }] },
                        "Not Assigned"
                    ]
                },
                roles: '$credentialsObject.roles'
            }
        }
    ]).exec()
        .then(results => {
            if (results.length === 1) {
                return results[0];
            }
            else {
                return null;
            }
        })
        .catch(err => {
            return null
        });

    return retVal;
}

// ----------------------------------------------------------------------------
// KRA
// ----------------------------------------------------------------------------

// get Projects by MANAGER ID

router.post('/kra/portfolio/projects', function (req, res) {
    year = parseInt(req.body.year, 10);
    quarter = parseInt(req.body.quarter, 10);
    managerId = parseInt(req.body.managerId, 10);

    yearValue = year - 2018;
    quarterValue = quarter - 1;

    ProjectDTO.aggregate([
        {
            '$match': { 'managerId': managerId }
        },
        {
            '$lookup': {
                from: 'users',
                localField: 'projectId',
                foreignField: 'projectId',
                as: 'usersList'
            }
        },
        {
            '$lookup': {
                from: 'users',
                localField: 'teamLeadId',
                foreignField: 'empId',
                as: 'teamLeadObject'
            }
        },
        { '$unwind': { path: "$teamLeadObject", preserveNullAndEmptyArrays: true } },
        {
            '$addFields': {
                'teamLeadName': { $concat: ["$teamLeadObject.firstName", " ", { $ifNull: ["$teamLeadObject.lastName", ""] }] },
                "total": { $size: "$usersList" },
                "kraCounts": {
                    $map: {
                        input: "$usersList",
                        as: "user",
                        in: {
                            "kraCount": {
                                "$arrayElemAt": [
                                    {
                                        "$map": {
                                            "input": {
                                                "$slice": [
                                                    {
                                                        "$map": {
                                                            "input": { "$slice": ["$$user.kraCollection", yearValue, 1] },
                                                            "as": "el",
                                                            "in": "$$el.quarters"
                                                        }
                                                    },
                                                    0, 1
                                                ]
                                            },
                                            "as": "el",
                                            "in": { $size: { "$arrayElemAt": ["$$el.kra", quarterValue] } }
                                        }
                                    },
                                    0
                                ]
                            }
                        }
                    }
                }
            }
        },
        {
            $project: {
                usersList: 0,
                teamLeadObject: 0
            }
        }
    ]).exec()
        .then(result => {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.json({
                data: result
            });
        })
        .catch((err) => {
            res.statusCode = 401;
            res.statusMessage = err.message
            res.json({
                message: err,
                data: null
            });
        });
});

// get PROJECT with PENDING COMPLETED statuses

router.get('/kra/projects/:year/:qtr', function (req, res) {
    year = req.params['year'];
    quarter = req.params['qtr'];

    async function status() {
        getProjectsList = ProjectDTO.aggregate([
            {
                '$lookup': {
                    from: 'users',
                    localField: 'teamLeadId',
                    foreignField: 'empId',
                    as: 'userObject'
                }
            },
            { '$unwind': '$userObject' },
            {
                '$addFields': {
                    'pending': '0',
                    'completed': '0',
                    'teamLeadName': { $concat: ["$userObject.firstName", " ", { $ifNull: ["$userObject.lastName", ""] }] },
                }
            },
            {
                '$sort': {
                    projectId: 1
                }
            },
            {
                '$project': {
                    userObject: 0
                }
            }
        ]).exec((err, results) => results);
        projectsList = await getProjectsList;

        getUsersList = UserDTO.find({}).select({ empId: 1, kraCollection: 1, projectId: 1, firstName: 1, lastName: 1 }).exec((err, users) => users);
        usersList = await getUsersList;

        completeAction = () => {
            for (const user of usersList) {
                // get user's project in projects list
                if (user.empId === 545) {
                    continue;
                }
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

    UserDTO.findOne(
        { empId: employeeId },
        { kraCollection: { $elemMatch: { year: year } } })
        .select({ '_id': 0 })
        .exec()
        .then((result) => {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            if (result.kraCollection[0].quarters[quarter - 1].kra.length > 0) {
                res.json({
                    data: result.kraCollection[0].quarters[quarter - 1]
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

    let sendMsg = true;
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

            // Check for carry forward
            if (req.body.updatedHistory.comment.includes('carried forward')) {
                user.kraCollection[yearIndex].quarters[req.body.quarter - 1].kra[serialIndex].carriedForward = true;
                sendMsg = false;
            }

            user.save().then(result => {
                res.statusCode = 200;
                res.statusMessage = 'Saved'
                res.json({
                    success: true,
                    data: null
                });
                if (sendMsg) {
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
                }
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

    const email = new Email({
        message: {
            from: process.env.NM_USERNAME
        },
        transport: TRANSPORTER,
        send: false
        // uncomment below to send emails in development/test env:
    });

    email
        .send({
            template: 'update-kra',
            message: {
                to: obj.email
            },
            locals: {
                name: obj.name,
                year: obj.year,
                quarter: obj.quarter,
                description: obj.description,
                rating: obj.rating,
                comment: obj.comment
            }
        })
        .then(console.log)
        .catch(console.error);

    // let mailOptions = {
    //     from: 'KRA Manager', // sender address
    //     to: obj.email, // list of receivers
    //     subject: 'Your Updated KRA', // Subject line
    //     text: 'Your Rating has been set or updated', // plain text body
    //     html: '<b>Hello ' + obj.name + ',</b>'
    //         + '<p>These are the details for your Kra for <strong>' + obj.year + ' Quarter: ' + obj.quarter + '</strong></p>'
    //         + '<p><ul><li><strong>Description: </strong>' + obj.description + '</li>'
    //         + '<li><strong>Rating:  </strong>' + obj.rating + '</li>'
    //         + '<li><strong>Comment:  </strong>' + obj.comment + '</li></ul></p>'
    // };

    // TRANSPORTER.sendMail(mailOptions).catch(onRejected => {
    //     console.log();
    // }
    // );
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
                            rating: 5,
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
            else {
                res.end();
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

router.post('/kra/sendMail', function (req, res) {

    const _subject = req.body.subject;
    const _recipient = req.body.recipient
    const _name = req.body.name;
    const _content = req.body.content;

    const email = new Email({
        message: {
            from: process.env.NM_USERNAME
        },
        transport: TRANSPORTER,
        send: true
    });

    email
        .send({
            template: 'custom-mail',
            message: {
                to: _recipient
            },
            locals: {
                name: _name,
                content: _content,
                subject: _subject
            }
        })
        .then(console.log)
        .catch(console.error);

    res.end();
});

router.put('/kra/copyKra', function (req, res) {
    const _qtr = parseInt(req.body.qtr, 10);
    const _empId = parseInt(req.body.empId, 10);
    const _year = parseInt(req.body.year, 10);
    const _projectId = parseInt(req.body.projectId, 10);
    const _kraData = req.body.kra;
    const _prevQtr = req.body.prevQtr;
    const _prevYear = req.body.prevYear;

    UserDTO.findOne({ empId: _empId })
        .exec()
        .then(user => {
            if (user) {
                let yearIndex = user.kraCollection.findIndex(x => x.year == _year);
                let last = user.kraCollection[yearIndex].quarters[_qtr - 1].kra.length;
                let count = 0;
                if (last > 0)
                    count = user.kraCollection[yearIndex].quarters[_qtr - 1].kra[last - 1].serial;
                // Modify Kra
                _kraData.serial = count + 1;

                _kraData.description = _kraData.description + ' [from ' + _prevYear + ' Q' + _prevQtr + ']';
                _kraData.carriedForward = false;
                user.kraCollection[yearIndex].quarters[_qtr - 1].kra.push(_kraData);
                user.save().then(result => {
                    // send mail
                    sendKraDetails(res, {
                        name: user.firstName,
                        email: user.emailId,
                        quarter: _qtr,
                        year: _year,
                        kraSerial: count + 1,
                        rating: _kraData.rating,
                        comment: 'Kra from previous quarter has been carried forward',
                        description: _kraData.description
                    });

                    res.statusCode = 200;
                    res.statusMessage = 'Added new item';
                    res.json({
                        success: true,
                        data: user.kraCollection[yearIndex].quarters[_qtr - 1].kra
                    });
                    return null;
                }).catch(err => {
                    res.json({
                        success: false,
                        message: 'copy failed',
                        data: null
                    });
                    return null;
                });
            }
            else {
                res.end();
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
// COUNT DOCUMENTS
// ----------------------------------------------------------------------------

async function countProjects() {

    const count = await ProjectDTO.aggregate([
        {
            '$group': { _id: null, count: { $sum: 1 } }
        }
    ]).exec();

    return count;
}

// ----------------------------------------------------------------------------
// ADMIN
// ----------------------------------------------------------------------------

// CREATE NEW USER
router.post('/admin/user', function (req, res) {
    const user = new UserDTO();

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName || undefined;
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

            // Add to CREDENTIAL DATABASE ALSO
            cred = new CredentialDTO();
            cred.password = 'qwerty';
            cred.empId = result.empId;
            cred.roles = [ROLES.BASIC];
            cred.isPasswordResetRequest = false;
            cred.verificationCode = '';
            cred.save();

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

// UPDATE USER
router.post('/admin/user/update', function (req, res) {
    const user = req.body;

    UserDTO.update({ empId: user.empId }, user, { multi: false, upsert: false })
        .then(result => {
            res.json({
                success: true,
            });
        })
        .catch(err => {
            res.json({
                success: false,
                message: err.message
            });
        }
        );
});

// DELETE user
router.delete('/admin/user/remove/:empId', function (req, res) {
    const empId = req.params['empId'];

    CredentialDTO.remove({ empId: empId })
        .exec().then(res => { console.log(res) }).catch(err => { console.log(err) });

    UserDTO.remove({ empId: empId })
        .then(result => {
            res.json({
                success: true,
            });
        })
        .catch(err => {
            res.json({
                success: false,
            });
        }
        );
});

router.get('/admin/projects', function (req, res) {
    ProjectDTO.aggregate([
        {
            '$lookup': {
                from: 'users',
                localField: 'managerId',
                foreignField: 'empId',
                as: 'managerObject'
            }
        },
        {
            '$lookup': {
                from: 'users',
                localField: 'teamLeadId',
                foreignField: 'empId',
                as: 'leadObject'
            }
        },
        { '$unwind': { path: '$managerObject', preserveNullAndEmptyArrays: true } },
        { '$unwind': { path: '$leadObject', preserveNullAndEmptyArrays: true } },
        {
            '$project': {
                projectId: 1,
                name: 1,
                manager: {
                    $ifNull: [
                        { $concat: ["$managerObject.firstName", " ", { $ifNull: ["$managerObject.lastName", ""] }] },
                        'None'
                    ]
                },
                teamLead: {
                    $ifNull: [
                        { $concat: ["$leadObject.firstName", " ", { $ifNull: ["$leadObject.lastName", ""] }] },
                        'None'
                    ]
                }
            }
        }
    ])
        .exec()
        .then(results => {
            res.json({
                success: true,
                data: results
            })
        })
        .catch(err => {
            res.json({
                success: false,
                message: err.message,
                data: null
            })
        });
});

// Create NEW PROJECT
router.post('/admin/projects', function (req, res) {
    async function getCount() {
        const maxId = await ProjectDTO.find().sort({ projectId: -1 }).limit(1)
            .exec()
            .then(projects => projects[0].projectId);
        return maxId;
    }

    getCount().then(maxId => {
        let project = new ProjectDTO();
        project.projectId = maxId + 1;
        project.name = req.body.name;
        project.managerId = req.body.managerId;
        project.teamLeadId = req.body.teamLeadId;

        project.save()
            .then(result => {
                res.json({
                    success: true
                });
            })
            .catch(err => {
                res.json({
                    success: false,
                    message: err.message
                });
            })
    });
});

// DELETE project
router.post('/admin/projects/remove', function (req, res) {
    const project = new ProjectDTO();
    project = req.body;

    project.save()
        .then(result => {
            res.statusCode = 200;
            res.statusMessage = 'Project Saved';
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

// Create new portfolio
router.post('/admin/portfolio', function (req, res) {
    const portfolio = new PortfolioDTO();
    portfolio = req.body;

    portfolio.save()
        .then(result => {
            res.statusCode = 200;
            res.statusMessage = 'Portfolio Saved';
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

router.get('/admin/roles/:name', function (req, res) {
    const role = req.params['name'];

    CredentialDTO.aggregate([
        {
            '$unwind': '$roles'
        },
        {
            '$match': { roles: role }
        },
        {
            '$lookup': {
                from: 'users',
                localField: 'empId',
                foreignField: 'empId',
                as: 'nameObject'
            }
        },
        {
            '$unwind': '$nameObject'
        },
        {
            '$addFields': { positionId: '$nameObject.positionId' }
        },
        {
            '$lookup': {
                from: 'positions',
                localField: 'positionId',
                foreignField: 'positionId',
                as: 'positionObject'
            }
        },
        {
            '$unwind': '$positionObject'
        },
        {
            '$project': {
                empId: 1,
                name: { $concat: ["$nameObject.firstName", " ", { $ifNull: ["$nameObject.lastName", ""] }] },
                position: '$positionObject.position'
            }
        }
    ])
        .exec()
        .then(results => {
            if (results.length > 0) {
                res.json({
                    success: true,
                    data: results
                });
            }
            else {
                res.json({
                    success: false,
                    data: null
                });
            }
            return null;
        })
        .catch(err => {
            res.json({
                success: true,
                message: err.message,
                data: null
            });
        });
});

router.post('/admin/roles', function (req, res) {
    const role = req.body.role;
    const empId = req.body.empId;

    CredentialDTO.findOne({ empId: empId })
        .exec()
        .then(cred => {
            if (cred.roles.indexOf(role) < 0) {

                cred.roles.push(role);
                cred.save()
                    .then(result => {
                        res.json({
                            success: true,
                            data: null
                        });
                    })
                    .catch(err => {
                        res.json({
                            sucess: false,
                            message: err.message,
                            data: null
                        });
                    });
            } else {

                res.json({
                    sucess: false,
                    message: 'already exists',
                });
            }
        })
        .catch(err => {
            res.json({
                sucess: false,
                message: err.message,
                data: null
            });
        })
});

router.post('/admin/roles/remove', function (req, res) {
    const role = req.body.role;
    const empId = req.body.empId;

    CredentialDTO.findOne({ empId: empId })
        .exec()
        .then(cred => {
            const index = cred.roles.indexOf(role);
            if (index > -1) {
                cred.roles.splice(index, 1);

                cred.save()
                    .then(result => {
                        res.json({
                            success: true,
                            data: null
                        });
                    })
                    .catch(err => {
                        res.json({
                            sucess: false,
                            message: err.message,
                            data: null
                        });
                    });
            }
            else {
                res.json({
                    sucess: false,
                    message: 'role not found',
                    data: null
                });
            }

            return null;
        }).catch(err => {
            res.json({
                sucess: false,
                message: err.message,
                data: null
            });
        });
});

router.get('/admin/backup', function (req, res) {
    res.json({ success: false })
    // UserDTO.find({})
    //     .exec()
    //     .then(users => {
    //         const date = new Date();
    //         const fileName = 'backup' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '.json';
    //         const location = fileName;
    //         const data = JSON.stringify(users);
    //         fs.writeFile(location, data, (err) => {
    //             if (err) {
    //                 res.json({ success: false })
    //             } else {
    //                 res.download(location);
    //             }
    //             res.json({ success: true });
    //         });
    //     })
    //     .catch(console.error)
});

function saveFileToDesktop(data) {
    try {
        const location = './public/backup/' + filename;
        fs.writeFile(location, JSON.stringify(data), callback);

    }
    catch (err) {
        console.error(err)
    }
}

router.get('admin/restore', function (req, res) {

});

// ----------------------------------------------------------------------------
// TEST
// ----------------------------------------------------------------------------

router.post('/admin/test', function (req, res) {

});

module.exports = router;
