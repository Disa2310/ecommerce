var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    categories:{
        type:Array
    },
   
});

module.exports = mongoose.model("categories",userschema);