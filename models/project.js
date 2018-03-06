var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    projectId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    startDate: { type: Number },
    teamLeadId: {type: Number},
    portfolioId: {type: Number}
});

module.exports = mongoose.model('Project', Schema, 'projects');
