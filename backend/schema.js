const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({
    title:{type:String ,required:true},
    author:{type:String,required:true},
    image:{type:String,required:true}
})
module.exports = mongoose.model("bookschema",bookschema)