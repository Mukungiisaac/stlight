const express = require('express');
const { getStats } = require('../controllers/dashboard');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/stats', protect, authorize('admin', 'superadmin'), getStats);

module.exports = router;
