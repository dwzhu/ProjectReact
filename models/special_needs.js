// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var SpecialNeedsSchema = new Schema({
  
  autism: {
    type: Boolean,
    default: false
  },
  blind: {
    type: Boolean,
    default: false
  },
  deaf: {
    type: Boolean,
    default: false
  },
  ADHD: {
    type: Boolean,
    default: false
  },
  Other: {
    type: Boolean,
    default: false
  }
  
});

// Create the Special Needs model with Mongoose
var specialNeed = mongoose.model("specialNeed", SpecialNeedsSchema);

// Export it for use elsewhere
module.exports = specialNeed;