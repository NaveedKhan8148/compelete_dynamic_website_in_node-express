const mongoose = require('mongoose');

const GalleryImages = mongoose.Schema({
    title: String,
    description: String,
    links:
        [{
            imageUrl: String,
        }],
});
module.exports = mongoose.model("galleryImage", GalleryImages);