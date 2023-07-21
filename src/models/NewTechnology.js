const mongoose= require('mongoose');

const NewTechnology= mongoose.Schema({
    title:String,
    description:String,
    buttonText:String

})

module.exports=mongoose.model('newTechnology',NewTechnology);