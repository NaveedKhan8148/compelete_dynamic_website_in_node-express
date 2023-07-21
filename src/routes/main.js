const express = require('express');
const { route } = require('express/lib/application');
const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Services = require('../models/Services');
const Contact = require('../models/Contact');
const NewTechnology = require('../models/NewTechnology');
const Section1 = require('../models/Section1');
const Section2 = require('../models/Section2');
const AboutUs = require('../models/AboutUs');
const GalleryImages = require('../models/GalleryImages');
const app = express();
const routes = express.Router()
routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id": "64aedfa5f24af1d517452042" });
    const slides = await Slider.find();
    const services = await Services.find();
    const newTechnology = await NewTechnology.find();
    const section1 = await Section1.find();
    const section2 = await Section2.find();
    const aboutus = await AboutUs.find();
    // console.log(slides)
    res.render("index", {
        details: details,
        slides: slides,
        services: services,
        newTechnology: newTechnology,
        section1: section1,
        section2: section2,
        aboutus: aboutus,
    })
})
routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id": "64aedfa5f24af1d517452042" });
    const galleryImages = await GalleryImages.findOne({ "_id": "64b942ed1e3ecbb3854a47eb" })
    res.render("gallery", {
        details: details,
        galleryImages: galleryImages,
    })

})

routes.post('/process-contact-form', async (req, res) => {
    console.log("the data is submited ")
    try {
        const data = Contact.create(req.body)
        res.redirect('/')
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
})

module.exports = routes;