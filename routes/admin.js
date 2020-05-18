const express = require('express');

app.use('/add-product', (req, res, next) => {
	res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');
});

app.post('/product',(req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

const Router = express.Router();