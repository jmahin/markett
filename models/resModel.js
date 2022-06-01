const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const resourceList = mongoose.model('resourceSchema', resourceSchema);

const resourceSchema = new Schema({
    _id: ObjectId,
    resName: string,
    resAddress: string,
    hoursOpen: string,
    season: string,
    resWeb: string
  });
  
module.exports = resourceList;