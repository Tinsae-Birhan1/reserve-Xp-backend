// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.post('/registerVendor', authController.registerVendor);
// router.post('/login', authController.login);

// module.exports = router;



const express = require('express');
const router = express.Router();
const adminController = require('../controllers/authController');

router.post('/registerVendor', adminController.registerVendor);
router.get('/pendingVendors', adminController.getPendingVendors);
router.put('/approveVendor/:userId', adminController.approveVendor);
router.get('/users/:status', adminController.getUsersByStatus);

module.exports = router;