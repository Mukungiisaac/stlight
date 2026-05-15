const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Residential', 'Commercial', 'Industrial', 'Public']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', GallerySchema);
