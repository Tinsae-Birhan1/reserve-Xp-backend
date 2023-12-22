const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  idCardFile: { type: String, required: true },
  tradeLicense: { type: String, required: true },
  role: { type: String, default: 'user' }, // 'user', 'vendor', 'admin'
  status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
});

const User = mongoose.model('User', userSchema);

module.exports = User;



