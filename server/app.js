const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Set security headers
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow local images to be loaded by frontend
}));

// Enable CORS
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100 // 100 requests per windowMs
});
app.use(limiter);

// Set static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route files
const auth = require('./routes/auth');
const products = require('./routes/products');
const categories = require('./routes/categories');
const gallery = require('./routes/gallery');
const qr = require('./routes/qr');
const contact = require('./routes/contact');
const dashboard = require('./routes/dashboard');
const upload = require('./routes/upload');

// Mount routers
app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/categories', categories);
app.use('/api/gallery', gallery);
app.use('/api/qr', qr);
app.use('/api/contact', contact);
app.use('/api/dashboard', dashboard);
app.use('/api/upload', upload);

// Centralized error handler
app.use(errorHandler);

module.exports = app;
