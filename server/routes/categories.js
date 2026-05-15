const express = require('express');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getCategories)
  .post(protect, authorize('admin', 'superadmin'), createCategory);

router
  .route('/:id')
  .put(protect, authorize('admin', 'superadmin'), updateCategory)
  .delete(protect, authorize('admin', 'superadmin'), deleteCategory);

module.exports = router;
