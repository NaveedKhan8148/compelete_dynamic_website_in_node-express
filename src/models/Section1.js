const mongoose = require('mongoose');

const Section1=mongoose.Schema({
    title:String,
    discription:String,
    buttonText:String,
    imageUrl:String,
});
module.exports=mongoose.model("section1",Section1);