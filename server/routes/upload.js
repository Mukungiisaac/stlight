const express = require('express');
const upload = require('../utils/fileUpload');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Upload image
// @route   POST /api/upload
// @access  Private
router.post('/', protect, authorize('admin', 'superadmin'), upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Please upload a file' });
  }

  res.status(200).json({
    success: true,
    message: 'File uploaded successfully',
    data: {
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`
    }
  });
});

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private
router.post('/multiple', protect, authorize('admin', 'superadmin'), upload.array('images', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, message: 'Please upload files' });
  }

  const fileData = req.files.map(file => ({
    filename: file.filename,
    path: `/uploads/${file.filename}`
  }));

  res.status(200).json({
    success: true,
    message: 'Files uploaded successfully',
    data: fileData
  });
});

module.exports = router;
