const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  liftAvailable: {
    type: Boolean,
    required: true
  },
  floor: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  fullAddress: {
    type: String,
    required: true
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
