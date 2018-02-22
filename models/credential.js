var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    empId: { type: Number, required: true, unique: true },
    password: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Credential', Schema, 'credentials');
