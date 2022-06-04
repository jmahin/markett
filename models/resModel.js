const mongoose = require('mongoose');
const { Schema } = mongoose;

const resourceSchema = new Schema({
  resName: String,
  resAddress: String,
  hoursOpen: String,
  season: String,
  resWeb: String
});
const newRes = mongoose.model('newRes', resourceSchema);

module.exports = newRes;