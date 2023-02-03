const mongoose = require('mongoose');

 try {
        module.exports =   mongoose.connect(process.env.MDBURL)
        console.log("Connection Successfull");
 } catch (error) {
    console.log(error);
 }
        
