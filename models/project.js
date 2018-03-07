var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    projectId: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    portfolioId: { type: Number },   // Same as manager Id
    teamLeadId: { type: Number },
    startDate: { type: Number }
});

module.exports = mongoose.model('Project', Schema, 'projects');
