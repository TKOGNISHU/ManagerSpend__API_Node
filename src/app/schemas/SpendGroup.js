const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const Spend = require('./Spend')

const SpendGroup = new Schema({
    name: { type: String, },
    time: { type: String, },
    data: [Spend],
})

module.exports = SpendGroup
