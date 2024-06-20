const mongoose = require('mongoose');
const express = require('express');
const Product = require('./models/product.model');

const res = require('express/lib/response');
const app = express()


app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello from Node API!');
});

app.get('/api/products', async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
});

app.get

app.get('/api/products/:id', async (req, res) => {
  try{
    const products = await Product.find
    res.status(200).json(products);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
});

app.post('/api/products', async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
});


//connection string
mongoose.connect('mongodb+srv://admin:admin@testdb.9awek7w.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TestDB')
  .then(() => {
    console.log('Connected to the database!')
    app.listen(3000), () => {
        console.log("Server is running on port 3000")
    }
})
  .catch(() => console.log("Connection failed!"));



  
  