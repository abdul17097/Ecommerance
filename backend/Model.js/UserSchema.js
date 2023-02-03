const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    uname: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    isAdmin: {type:Boolean,default:false}
})

module.exports = mongoose.model('users',userSchemas);
