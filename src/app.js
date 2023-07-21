const express= require('express')
const app = express();
const port = process.env.PORT | 8000;
const routes = require("./routes/main.js")
const bodyParser=require('body-parser')
const hbs = require('hbs');
const mongoose = require('mongoose')
const Detail = require("./models/Detail")
const Slider =require("./models/Slider")
const Services=require('./models/Services');
const NewTechnology = require('./models/NewTechnology.js');
const Section1 = require('./models/Section1.js');
const Section2 = require('./models/Section2.js');
const AboutUs = require('./models/AboutUs.js');
const GalleryImages = require('./models/GalleryImages.js');

app.use(bodyParser.urlencoded({
extended:true
}))
app.use("/static",express.static("public"));

app.use("",routes)

app.set("view engine","hbs");
app.set("views","views");

hbs.registerPartials("views/partials")
mongoose.connect('mongodb://127.0.0.1:27017/complete_website',
{useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{

// GalleryImages.create({
// title:"hi how are you",
// description:"this is my discription",
// links:[
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// {
// imageUrl:"/static/images/istockphoto-1081869356-612x612.jpg",
// },
// ]
// })

// AboutUs.create({
// title:"About Us",
// discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe illo maiores reiciendis consequuntur nulla minus veritatis, hic quasi distinctio tenetur ex pariatur quos nobis asperiores quia esse velit? Dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi hic illo molestiae aliquam alias incidunt ipsam quibusdam excepturi mollitia veritatis ratione, aperiam libero ad atque minima eligendi soluta nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe illo maiores reiciendis consequuntur nulla minus veritatis, hic quasi distinctio tenetur ex pariatur quos nobis asperiores quia esse velit? Dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi hic illo molestiae aliquam alias incidunt ipsam quibusdam excepturi mollitia veritatis ratione, aperiam libero ad atque minima eligendi soluta nisi?",
// buttonText:"Contact Us",

// })

// Section2.create({
// title:"Learn here and get the job for any company",
// discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis saepe quisquam dolores officiis in optio dolore deleniti quam modi similique doloremque, tempora nobis, possimus vitae mollitia nesciunt iste voluptates.",
// buttonText:"Click Here",
// imageUrl:"/static/images/problem-solving.svg",
// })

// Section1.create({
// title:"We work for the people, not for money",
// discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis saepe quisquam dolores officiis in optio dolore deleniti quam modi similique doloremque, tempora nobis, possimus vitae mollitia nesciunt iste voluptates.",
// buttonText:"Click Here",
// imageUrl:"/static/images/programming.svg",

// })

// NewTechnology.create({
// title:"Starting New Technology here!!",
// description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet, fuga odio saepe, provident voluptatem vel voluptatum nihil, quibusdam omnis fugit atque dolores dolorum quae. Explicabo dolor ipsum culpa iste.",
// buttonText:"Learn More"
// })
// Services.create([


// {
// icon:'fab fa-accusoft',
// title:'Provid Best Cousrses',
// description:'We provide courses that helps our student in learining and placement ',
// linkText:'Check',
// link:'https://fontawesome.com/icons/accusoft?f=brands&s=solid'
// },
// {
// icon:'fab fa-accusoft',
// title:'Provid Best Cousrses',
// description:'We provide courses that helps our student in learining and placement ',
// linkText:'Check',
// link:'https://fontawesome.com/icons/accusoft?f=brands&s=solid'
// } ,
// {
// icon:'fab fa-accusoft',
// title:'Provid Best Cousrses',
// description:'We provide courses that helps our student in learining and placement ',
// linkText:'Check',
// link:'https://fontawesome.com/icons/accusoft?f=brands&s=solid'
// }


// ])
// Slider.create([
// {
// title:"what is NodeJs",
// subTitle:"NodeJs is the is runtime enviorment of the javaScript",
// imageUrl:"/static/css/s1.jpg"
// },
// {
// title:"what is Pytho",
// subTitle:"Python is the most popular language now a day",
// imageUrl:"/static/css/s2.jpg"
// },
// {
// title:"what is PHP",
// subTitle:"PHP is the server side language ",
// imageUrl:"/static/css/s2.jpg"
// },
// ])




// Detail.create({
// brandName:"Info Technical solution",
// brandIconUrl:"static/images/download__1_-removebg-preview.png",
// links:[

// {
// label:"Home",
// url:"/"
// },
// {
// label:"services",
// url:"/services"
// },
// {
// label:"Gallery",
// url:"/gallery"
// },
// {
// label:"About",
// url:"/about"
// },
// {
// label:"Contact Us",
// url:"/contactus"
// },
// ]
// })
console.log("connection is sucessfully.....")})
.catch((err)=>console.log(err));

app.listen(8000,()=>{
console.log(`listining to the port = ${port} `)
})