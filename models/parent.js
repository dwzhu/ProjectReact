// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ParentSchema = new Schema({
  parentFirstName: {
    type: String,
    unique: true,
    required: true
  },
  parentLastName: {
    type: String,
    unique: true,
    required: true
  },

  // Use email as username
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  zipcode: {
    type: Number
  },

  // Create a relation with the Child model
  children: [{
  	type: Schema.Types.ObjectId,
  	ref:'Child'
  }]
});

// Create the Parent model with Mongoose
var Parent = mongoose.model("Parent", ParentSchema);

// Export it for use elsewhere
module.exports = Parent;