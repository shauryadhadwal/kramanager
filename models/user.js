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
    year: { type: Number, required: true, max: 2050, min: 1990, },
    quarters: [QuarterSchema]
});

var Schema = new Schema({
    empId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    positionId: { type: Number, required: true },
    kraSet: { type: Boolean },
    projectId: { type: Number },
    emailId: { type: String, required: true },
    kraCollection: [KraCollectionSchema]
});

module.exports = mongoose.model('User', Schema, 'users');
