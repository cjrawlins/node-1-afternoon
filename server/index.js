
// Set up express 
const express = require('express');

// Bring in Required files
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

//Setup app and set it to express
const app = express();

app.use(express.json());

// Declare Port
const port = 3001;

// Set up server listener and log port
app.listen(port, () => console.log(`Server listening on port ${port}`));


/////////////_____Endpoints_____////////////////
//__V__Send Full Product Object__V__//
app.get('/api/products', getProducts);

//_V__Send Product by ID__V__//
app.get('/api/product/:id', getProduct);


