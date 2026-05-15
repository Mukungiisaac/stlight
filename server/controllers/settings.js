const ErrorResponse = require('../utils/errorResponse');
const Settings = require('../models/Settings');

// @desc    Get all settings
// @route   GET /api/settings
// @access  Public
exports.getSettings = async (req, res, next) => {
  try {
    // Check if DB is connected
    if (require('mongoose').connection.readyState !== 1) {
      const fs = require('fs');
      const path = require('path');
      const mockData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'mockDB.json'), 'utf8'));
      
      return res.status(200).json({
        success: true,
        data: mockData.settings,
        isMock: true
      });
    }

    let settings = await Settings.findOne();
    
    // If no settings exist, create default
    if (!settings) {
      settings = await Settings.create({});
    }

    res.status(200).json({
      success: true,
      data: settings
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update settings
// @route   PUT /api/settings
// @access  Private
exports.updateSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create(req.body);
    } else {
      settings = await Settings.findByIdAndUpdate(settings._id, req.body, {
        new: true,
        runValidators: true
      });
    }

    res.status(200).json({
      success: true,
      data: settings
    });
  } catch (err) {
    next(err);
  }
};
