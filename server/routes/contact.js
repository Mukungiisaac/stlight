const express = require('express');
const {
  sendInquiry,
  getInquiries,
  updateInquiryStatus
} = require('../controllers/contact');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(protect, authorize('admin', 'superadmin'), getInquiries)
  .post(sendInquiry);

router.put('/:id', protect, authorize('admin', 'superadmin'), updateInquiryStatus);

module.exports = router;
