const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config();

// ROUTES
const api = require('./routes/api');

// MONGOOSE
const mongoose = require('mongoose');
const config = require('./config.js').get(process.env.NODE_ENV);
const uri = config.mlab.defaultUri;
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

mongoose.connect(uri, options);
// Use bluebird
mongoose.Promise = require('bluebird');

const app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/dist'));

// Prevent unauthorized access
if (process.env.NODE_ENV == 'production') {
    app.use(expressJwt({ secret: process.env.JWT_SECRET }).unless({ path: ['/api/login', /\/api\/password/i, '/api/admin/test'] }))
}

//ROUTES
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    if (401 == err.status) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    }
    else if (err.name === 'UnauthorizedError') {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    }
    else {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
});

module.exports = app;
