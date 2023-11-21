// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for the user's cart items
const cartItemSchema = new mongoose.Schema({
  userId: String,
  item: Object
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to add an item to the user's cart
app.post('/cart/add', verifyToken, (req, res) => {
  const { item, token } = req.body;
  const decoded = jwt.verify(token, 'your-secret-key'); // Verify the user's token
  const userId = decoded.userId;

  // Create a new cart item
  const newCartItem = new CartItem({
    userId,
    item
  });

  // Save the new cart item to the database
  newCartItem.save((err) => {
    if (err) {
      res.status(500).send('Error saving to database');
    } else {
      res.status(200).send('Item added to cart');
    }
  });
});

// Verify JWT token middleware
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (typeof token !== 'undefined') {
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
