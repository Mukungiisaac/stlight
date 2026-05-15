const mongoose = require('mongoose');
const Settings = require('./models/Settings');
const Category = require('./models/Category');
require('dotenv').config();

const check = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const settings = await Settings.findOne();
  const categories = await Category.find();
  console.log('Settings:', settings);
  console.log('Categories:', categories);
  process.exit();
};

check();
