const mongoose = require('mongoose');

const Section2=mongoose.Schema({
    title:String,
    discription:String,
    buttonText:String,
    imageUrl:String,
});
module.exports=mongoose.model("section2",Section2);