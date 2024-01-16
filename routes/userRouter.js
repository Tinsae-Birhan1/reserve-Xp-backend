const express = require('express');
const multer = require('multer');
const AuthController = require('../controllers/users');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg');
    },
});

const upload = multer({ storage: storage });

router.post('/upload-image', upload.fields([
    { name: 'IdCard', maxCount: 1 },
    { name: 'tradeLicense', maxCount: 1 },
]), AuthController.singleImageUpload);

module.exports = router;
