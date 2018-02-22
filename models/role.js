var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    manager: [{ type: Number}],
    lead: [{ type: Number}],
    admin: [{ type: Number}]
});

module.exports = mongoose.model('Role', Schema, 'roles');
