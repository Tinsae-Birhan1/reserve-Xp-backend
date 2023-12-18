// const User = require('../models/User');

// exports.registerVendor = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const newUser = new User({
//       username,
//       password,
//       role: 'vendor',
//       status: 'pending',
//     });

//     await newUser.save();

//     res.json({ message: 'Registration successful. Waiting for admin approval.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// exports.login = async (req, res) => {
//   // Implement login functionality
// };


const User = require('../models/User');

exports.getPendingVendors = async (req, res) => {
  try {
    const pendingVendors = await User.find({ status: 'pending' });
    res.json(pendingVendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.approveVendor = async (req, res) => {
  try {
    const userId = req.params.userId;

    const approvedUser = await User.findByIdAndUpdate(userId, { status: 'approved' }, { new: true });

    if (!approvedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Vendor request approved', user: approvedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.registerVendor = async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = new User({
      username,
      password,
      fullName,
      businessName,
      phoneNumber,
      email,
      idCardFile,
      tradeLicense,


      role: 'vendor',
      status: 'pending', // Assuming all vendors start as pending
    });

    await newUser.save();

    res.json({ message: 'Registration successful. Waiting for admin approval.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the directory where you want to store the files
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const fileExtension = path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
//   },
// });

// const upload = multer({ storage: storage });

// exports.registerVendor = async (req, res) => {
//   try {
//     const {
//       username,
//       fullName,
//       businessName,
//       phoneNumber,
//       email,
//       password,
//     } = req.body;

//     // Assuming you have a Vendor model
//     const newVendor = new Vendor({
//       username,
//       fullName,
//       businessName,
//       phoneNumber,
//       email,
//       password,
//       role: 'vendor',
//       status: 'pending', // Assuming all vendors start as pending
//     });

//     // Handle file uploads
//     upload.fields([
//       { name: 'idCardFile', maxCount: 1 },
//       { name: 'tradeLicense', maxCount: 1 },
//     ])(req, res, async (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'File upload error' });
//       }

//       if (req.files) {
//         // Assuming your file fields are named 'idCardFile' and 'tradeLicense'
//         newVendor.idCardFile = req.files['idCardFile'][0].filename;
//         newVendor.tradeLicense = req.files['tradeLicense'][0].filename;
//       }

//       await newVendor.save();

//       res.json({ message: 'Registration successful. Waiting for admin approval.' });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };




// authController.js
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If the credentials are valid, you might generate a token for authentication
    // Example: const token = generateAuthToken(user);

    // Return success response along with the token or other relevant information
    res.json({ message: 'Login successful', /* token or user information */ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// adminController.js

exports.getUsersByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    // Validate the status to prevent potential security issues
    const validStatuses = ['pending', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Get users by status
    const users = await User.find({ status });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
