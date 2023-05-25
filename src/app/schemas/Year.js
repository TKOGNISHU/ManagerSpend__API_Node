const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const Month = require('./Month')

const Year = new Schema({
    value: { type: Number, default: 0, },
    data: [Month],
})

module.exports = Year
