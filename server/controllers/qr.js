const ErrorResponse = require('../utils/errorResponse');
const QR = require('../models/QR');

// @desc    Get QR info
// @route   GET /api/qr
// @access  Public
exports.getQR = async (req, res, next) => {
  try {
    const qr = await QR.findOne().sort('-createdAt');

    res.status(200).json({
      success: true,
      data: qr
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add/Update QR info
// @route   POST /api/qr
// @access  Private
exports.createQR = async (req, res, next) => {
  try {
    const qr = await QR.create(req.body);

    res.status(201).json({
      success: true,
      message: 'QR information updated successfully',
      data: qr
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Track QR Scan
// @route   PUT /api/qr/:id/scan
// @access  Public
exports.trackScan = async (req, res, next) => {
  try {
    const qr = await QR.findByIdAndUpdate(
      req.params.id,
      { $inc: { scanCount: 1 } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: qr
    });
  } catch (err) {
    next(err);
  }
};
