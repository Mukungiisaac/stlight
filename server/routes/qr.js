const express = require('express');
const { getQR, createQR, trackScan } = require('../controllers/qr');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getQR)
  .post(protect, authorize('admin', 'superadmin'), createQR);

router.put('/:id/scan', trackScan);

module.exports = router;
