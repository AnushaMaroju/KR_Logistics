const mongoose = require("mongoose");
const helper = require("../helper/helper")



const AdminUserRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    // optional: true
  },
  password: {
    type: String,
    // optional: true
  },
  roleName: {
    type: String,
  },
  otp: {
    type: Number,
    default: ""
  },
  token: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "active",
  },
  address: {
    type: String,
    default: "",
  },
  DOB: {
    type: String,
    default: null,
  },
  image:{type:String,
    default:""
  },
  lastDate:{
    type:String,
    default:""
  },

  created_at: {
    type: String,
    default: helper.timeWithDate()
  },
  date: {
    type: String,
    default: helper.availableTimeAndDate()
  },updated_at:{
    type:String
  }
});

module.exports = mongoose.model("AdminUsers", AdminUserRoleSchema);
