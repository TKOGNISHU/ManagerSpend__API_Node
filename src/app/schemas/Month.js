const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const SpendType = require('./SpendType')

const Month = new Schema({
    value: { type: Number, default: 0, }, // 1 - 12
    data: [SpendType],
})

module.exports = Month
