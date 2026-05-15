const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },
  productInterested: {
    type: String,
    default: 'General Inquiry'
  },
  status: {
    type: String,
    enum: ['New', 'Read', 'Replied'],
    default: 'New'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
