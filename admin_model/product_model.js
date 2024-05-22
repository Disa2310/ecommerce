var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    rating:{
        type:Number
    },
    stock:{
        type:Number
    },
    brand:{
        type:String
    },
    category:{
        type:String
    },
    thumbnail:{
        type:String
    },
     images:{
     type:Array
    }
    
    
});

module.exports = mongoose.model("product",userschema);