var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    portfolioId: { type: Number, required: true, unique: true },
    portfolioName: { type: String, required: true, trim: true },
    projectManagerId: { type: Number },
});

module.exports = mongoose.model('Portfolio', Schema, 'portfolios');
