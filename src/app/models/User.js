const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const Year = require('../schemas/Year')

const User = new Schema({
    name: { type: String, },
    avatar: { type: String, },
    email: { type: String, },
    birth: { type: String, },
    spends: [Year],
})

module.exports = mongoose.model('User', User)
/**
 * spends: [
 *      {
 *           value: { type: Number, },
 *           data: [ // month
 *                {
 *                     value: { type: Number, },
 *                     data: [
 *                          { // spend's type
 *                               name: { type: String, },
 *                               spendMax: { type: Number, },
 *                               currentSpend: { type: Number, },
 * 
 *                               data: [
 *                                    { // <spendGroup(option)>: 
 *                                         name: { type: String, },
 *                                         time: { type: String, },
 *
 *                                         data: [
 *                                              <spend>...
 *                                         ]
 *                                    },
 *                                    { // <spend(option)>: 
 *                                         name: { type: String, },
 *                                         spend: { type: Number, },
 *                                         unitOfAccount: { type: String, },
 *                                         time: { type: String, },
 *                                    }
 *                               ]
 *                          }
 *                     ]
 *                }
 *           ]
 *      }
 * ]
 */
