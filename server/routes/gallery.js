const express = require('express');
const {
  getGallery,
  createGalleryItem,
  deleteGalleryItem
} = require('../controllers/gallery');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getGallery)
  .post(protect, authorize('admin', 'superadmin'), createGalleryItem);

router
  .route('/:id')
  .delete(protect, authorize('admin', 'superadmin'), deleteGalleryItem);

module.exports = router;
