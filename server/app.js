const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./data/products.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API endpoints (implementations pending)
app.get('/api/products', (req, res) => {
  // Replace with logic to fetch products from database or storage
  res.json(products);
});

app.post('/api/cart', (req, res) => {
  // Add item to cart
});

app.get('/api/cart', (req, res) => {
  // Fetch cart items
});

app.put('/api/cart/:productId', (req, res) => {
  // Update cart item quantity
});

app.delete('/api/cart/:productId', (req, res) => {
  // Remove item from cart
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
