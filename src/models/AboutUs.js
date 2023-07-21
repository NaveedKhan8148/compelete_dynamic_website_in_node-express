const mongoose = require('mongoose');

const AboutUs = mongoose.Schema({
    title: String,
    discription: String,
    buttonText: String,
});
module.exports = mongoose.model("aboutu", AboutUs);