const mongoose = require("mongoose");

const machineSchema = mongoose.Schema({
  machineType: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const machine = mongoose.model("machine", machineSchema);

module.exports = machine;
