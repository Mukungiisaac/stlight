const ErrorResponse = require('../utils/errorResponse');
const Gallery = require('../models/Gallery');

// @desc    Get gallery items
// @route   GET /api/gallery
// @access  Public
exports.getGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.find().sort('-createdAt');

    res.status(200).json({
      success: true,
      count: gallery.length,
      data: gallery
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add gallery item
// @route   POST /api/gallery
// @access  Private
exports.createGalleryItem = async (req, res, next) => {
  try {
    const galleryItem = await Gallery.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Gallery item added successfully',
      data: galleryItem
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private
exports.deleteGalleryItem = async (req, res, next) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return next(new ErrorResponse(`Gallery item not found with id of ${req.params.id}`, 404));
    }

    await galleryItem.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Gallery item deleted successfully',
      data: {}
    });
  } catch (err) {
    next(err);
  }
};
