require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const email = 'admin@stlight.com';
    const password = 'AdminPassword123';

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      console.log('Admin already exists');
      process.exit(0);
    }

    await Admin.create({
      name: 'ST.LIGHT Admin',
      email,
      password
    });

    console.log('Admin created successfully');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
