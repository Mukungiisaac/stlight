const Product = require('../models/Product');
const Category = require('../models/Category');
const Gallery = require('../models/Gallery');
const Contact = require('../models/Contact');
const QR = require('../models/QR');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private
exports.getStats = async (req, res, next) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalGalleryItems = await Gallery.countDocuments();
    const totalInquiries = await Contact.countDocuments();
    const featuredProductsCount = await Product.countDocuments({ featured: true });
    
    // Get QR scan count
    const qr = await QR.findOne().sort('-createdAt');
    const totalQRScans = qr ? qr.scanCount : 0;

    // Get recent inquiries
    const recentInquiries = await Contact.find().sort('-createdAt').limit(5);

    res.status(200).json({
      success: true,
      data: {
        totalProducts,
        totalCategories,
        totalGalleryItems,
        totalInquiries,
        featuredProductsCount,
        totalQRScans,
        recentInquiries
      }
    });
  } catch (err) {
    next(err);
  }
};
