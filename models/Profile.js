const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  countpost: {
    type: Number
  },
  countcomment: {
    type: Number
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);