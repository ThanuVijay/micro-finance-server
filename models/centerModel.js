const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  branchId: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
});

// Enum for days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const centerSchema = new mongoose.Schema({
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
    required: true
  },
  centerCode: {
    type: String,
    required: true,
  },
  centerName: {
    type: String,
    required: true,
  },
  collectionDay: {
    type: String,
    enum: daysOfWeek,
    required: true,
  },
  collectionOfficer: {
    type: String,
    required: true,
  },
  centerLeader: {
    type: String,
    required: true,
  },
});

const BranchModel = mongoose.model('Branch', branchSchema);
const CenterModel = mongoose.model('Center', centerSchema);

module.exports = {
  BranchModel,
  CenterModel,
};
