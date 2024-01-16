const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const tenant = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name:{ type: String, required: true },
    business_name: {type:String,required: true,unique: true},
    phone: { type: String , required: true},
    email: { type: String ,required: true},
    password: {type:String,required: true},
    isActive: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model("AllTenant", tenant,"AllTenant");
