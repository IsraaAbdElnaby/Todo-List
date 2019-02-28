var mongoose = require('mongoose');
var Todos = mongoose.model('Todos',{
    activity:{
        type:String,
        minlength:1,
        required:true,
        trim:true
    },
    done:{
        type:Boolean,
        default:false
    }
})

module.exports = {Todos};