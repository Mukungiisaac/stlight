const mongoose = require('mongoose');
const slugify = require('slugify');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Solar',
      'Electricals',
      'Electronics',
      'Lighting',
      'Advanced Security Systems'
    ]
  },
  price: {
    type: String,
    required: [true, 'Please add a price']
  },
  images: {
    type: [String],
    default: ['no-photo.jpg']
  },
  featured: {
    type: Boolean,
    default: false
  },
  availability: {
    type: String,
    enum: ['In Stock', 'Out of Stock', 'On Request'],
    default: 'In Stock'
  },
  specifications: {
    type: [String],
    default: []
  },
  whatsappNumber: {
    type: String,
    default: '+254700000000'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create product slug from the name
ProductSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
