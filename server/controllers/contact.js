const ErrorResponse = require('../utils/errorResponse');
const Contact = require('../models/Contact');

// @desc    Send contact inquiry
// @route   POST /api/contact
// @access  Public
exports.sendInquiry = async (req, res, next) => {
  try {
    const inquiry = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Inquiry sent successfully',
      data: inquiry
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all inquiries
// @route   GET /api/contact
// @access  Private
exports.getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Contact.find().sort('-createdAt');

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update inquiry status
// @route   PUT /api/contact/:id
// @access  Private
exports.updateInquiryStatus = async (req, res, next) => {
  try {
    const inquiry = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: inquiry
    });
  } catch (err) {
    next(err);
  }
};
