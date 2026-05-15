const express = require('express');
const { getSettings, updateSettings } = require('../controllers/settings');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getSettings)
  .put(protect, authorize('admin', 'superadmin'), updateSettings);

module.exports = router;
