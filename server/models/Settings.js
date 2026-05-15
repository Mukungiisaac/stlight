const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    default: '+254719103288'
  },
  email: {
    type: String,
    default: 'info@stlight.com'
  },
  address: {
    type: String,
    default: 'Nairobi, Kenya'
  },
  whatsappMessage: {
    type: String,
    default: "I'm interested in this product from your catalogue"
  },
  primaryColor: {
    type: String,
    default: '#0066FF' // Brand Blue
  },
  secondaryColor: {
    type: String,
    default: '#00D084' // Brand Green
  },
  accentColor: {
    type: String,
    default: '#FF8C00' // Brand Orange
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Settings', SettingsSchema);
