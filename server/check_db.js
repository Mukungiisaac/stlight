require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Assuming this exists

const checkData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const count = await Product.countDocuments();
    console.log(`Total Products: ${count}`);
    const products = await Product.find().limit(5);
    console.log('Sample Products:', products);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

checkData();
