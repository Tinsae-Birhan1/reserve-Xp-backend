const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    companyName: { type: String, required: true },
    IdCard: [{
        type: String, required: function () { return this.role === 'vendor'; }
    }],

    tradeLicense: [{
        type: String, required: function () { return this.role === 'vendor'; }
    }],
    role: { type: String, required: true }, // Add role field
    status: { type: String, default: null, required: function () { return this.role === 'vendor'; } },
})

// User model
const User = mongoose.model("User", UserSchema,"User")

module.exports = User
