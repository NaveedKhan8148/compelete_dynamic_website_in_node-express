const mongoose = require('mongoose')
const Services = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
});
module.exports= mongoose.model("servece",Services);
