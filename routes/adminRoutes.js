const express = require('express');
const router = express.Router();
const adminController = require('../controllers/authController');

router.get('/pendingVendors', adminController.getPendingVendors);
router.put('/approveVendor/:userId', adminController.approveVendor);

module.exports = router;
