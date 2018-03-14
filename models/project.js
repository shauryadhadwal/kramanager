var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    projectId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    managerId: { type: Number },
    teamLeadId: { type: Number },
    startDate: { type: Number }
});

Schema.pre('save', function (next) {
    var self = this;
    self.managerId = parseInt(self.managerId, 10);
    self.teamLeadId = parseInt(self.teamLeadId, 10);
    self.startDate = 201701;
    return next();
});

module.exports = mongoose.model('Project', Schema, 'projects');
