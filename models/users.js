const {Schema, model} = require("../database/connection") // import Schema & model

// User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: { type: String, required: true }, // Add role field
    status: { type: String, default: null, required: function () { return this.role === 'vendor'; } },
})

// User model
const User = model("User", UserSchema)

module.exports = User
