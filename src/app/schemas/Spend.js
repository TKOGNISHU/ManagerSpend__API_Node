const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const Spend = new Schema({
    name: { type: String, },
    spend: { type: Number, },
    unitOfAccount: { type: String, },
    time: { type: String, },
})

module.exports = Spend
