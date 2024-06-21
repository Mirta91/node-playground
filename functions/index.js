const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("../routes/product.route.js");
const serverless = require("serverless-http");
const dotenv = require('dotenv');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
dotenv.config(); //enable .env variables

app.get('/', function (req, res) {
  console.log("Hello home!");
});


//connection string
mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST)
  .then(() => {
    console.log('Connected to the database!')
    app.listen(3000), () => {
        console.log("Server is running on port 3000")
    }
}).catch(() => console.log("Connection failed!"));

//routes
app.use("/.netlify/functions/api/products/", productRoute)
module.exports.handler = serverless(app);
  
  