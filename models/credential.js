var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    empId: { type: Number, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    verificationCode: { type: String, trim: true },
    isPasswordResetRequest: { type: Boolean, required: true },
    roles: [{ type: String, unique: true }]
});

module.exports = mongoose.model('Credential', Schema, 'credentials');

// 1 - basic
// 25 - lead
// 50 - manager
// 100 - admin