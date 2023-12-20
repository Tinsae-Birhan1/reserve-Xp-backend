
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/authController');

router.post('/registerVendor', adminController.registerVendor);
router.get('/pendingVendors', adminController.getPendingVendors);
router.put('/approveVendor/:userId', adminController.approveVendor);
router.get('/users/:status', adminController.getUsersByStatus);

module.exports = router;