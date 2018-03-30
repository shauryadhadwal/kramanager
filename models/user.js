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
    carriedForward: {type: Boolean},
    history: [KraHistorySchema]
});

var QuarterSchema = new Schema({
    quarter: { type: Number, required: true, max: 4, min: 1 },
    kra: [KraSchema]
});

var KraCollectionSchema = new Schema({
    year: { type: Number, required: true, max: 2050, min: 1990, },
    quarters: [QuarterSchema]
});

var Schema = new Schema({
    empId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    emailId: { type: String, required: true },
    positionId: { type: Number, required: true },
    projectId: { type: Number },
    kraSet: { type: Boolean },
    kraCollection: [KraCollectionSchema]
});

module.exports = mongoose.model('User', Schema, 'users');
