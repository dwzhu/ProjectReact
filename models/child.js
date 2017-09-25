// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ChildSchema = new Schema({
  childFirstName: {
    type: String,
    unique: true,
    required: true
  },
  childLastName: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    unique: true,
    required: true
  },

  // Create a relation with the Interests model
  interests: [{
    type: Schema.Types.ObjectId,
    ref:'Interest'
  }]

  // Create a relation with the Special Needs model
  specialNeeds: [{
    type: Schema.Types.ObjectId,
    ref:'specialNeed'
  }]
  
});

// Create the Child model with Mongoose
var Child = mongoose.model("Child", ChildSchema);

// Export it for use elsewhere
module.exports = Child;