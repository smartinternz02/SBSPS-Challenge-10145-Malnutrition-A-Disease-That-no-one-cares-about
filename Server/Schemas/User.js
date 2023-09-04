const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true,
    },
    age:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User' , UserSchema);