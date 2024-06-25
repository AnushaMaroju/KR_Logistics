const mongoose = require("mongoose");
const helper = require("../helper/helper");

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  startLocation: {
    type: String,
    required: true,
  },
  endLocation: {
    type: String,
    required: true
  },
  photos: {
    type: Array,
    default: [],
  },
  videos: {
    type: Array,
    default: [],
  },
  quotation: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  paidStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    required: true,
  },
  created_at: {
    type: String,
    default: helper.timeWithDate(),
  },
  date: {
    type: String,
    default: helper.availableTimeAndDate(),
  },
  updated_at: {
    type: String,
  },
});


const UserData = mongoose.model("kr_userdata", userDataSchema);

module.exports = UserData;
