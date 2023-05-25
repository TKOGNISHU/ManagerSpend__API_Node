const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const SpendGroup = require('./SpendGroup')
const Spend = require('./Spend')

const SpendType = new Schema({
    name: { type: String, },
    spendMax: { type: Number, },
    currentSpend: { type: Number, },
    data: [
        // [SpendGroup],
        // [Spend],
    ],
})

module.exports = SpendType
