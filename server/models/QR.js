const mongoose = require('mongoose');

const QRSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  qrImage: {
    type: String,
    required: [true, 'Please add a QR image']
  },
  catalogueUrl: {
    type: String,
    required: [true, 'Please add a catalogue URL']
  },
  scanCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QR', QRSchema);
