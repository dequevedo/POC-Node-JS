const express = require('express');
const app = express();

const rotaProdutos = require('./routes/products')

app.use('/products', rotaProdutos);

module.exports = app