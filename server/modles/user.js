const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
        username:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
            validator: validator.isEmail,
            message:'email isn\'t valid'
        }
    },
    password:{
        type: string,
        required: true,
        minlength: 6
    }
})
var User = mongoose.model('User',{

});

module.exports = {User};