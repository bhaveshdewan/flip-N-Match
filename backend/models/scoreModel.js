const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
    turn : {
        type:Number,
        required:true
    },
    time : {
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('Score',scoreSchema)