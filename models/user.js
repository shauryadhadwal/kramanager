var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KraHistorySchema = new Schema({
    rating: { type: Number, max: 5 },
    comment: { type: String },
    dateChanged: { type: Date }
});
var KraSchema = new Schema({
    serial: { type: Number, required: true },
    rating: { type: Number, max: 5 },
    description: { type: String, required: true },
    history: [KraHistorySchema]
});

var QuarterSchema = new Schema({
    quarter: { type: Number, required: true, max: 4, min: 1 },
    kra: [KraSchema]
});

var KraCollectionSchema = new Schema({
    year: { type: Number, required: true, max: 2050, min: 1990 },
    quarters: [QuarterSchema]
});

var Schema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, trim: true },
    empId: { type: Number, required: true },
    kraSet: { type: Boolean },
    positionId: { type: Number },
    projectId: { type: Number, required: true },
    emailId: { type: String, required: true },
    kraCollection: [KraCollectionSchema]
});

module.exports = mongoose.model('User', Schema, 'users');
