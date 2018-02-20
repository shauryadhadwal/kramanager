var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    positionId: { type: Number, required: true, unique: true },
    position: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Position', Schema, 'positions');
