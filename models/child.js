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
  music: {
    type: Boolean
  },
  sports: {
    type: Boolean
  },
  videoGames: {
    type: Boolean
  },
  movies: {
    type: Boolean
  },
  artsCrafts: {
    type: Boolean
  },
  collectibles: {
    type: Boolean
  },
  engineering: {
    type: Boolean
  },
  tech: {
    type: Boolean
  },
  outdoor: {
    type: Boolean
  },
  educational: {
  	type: Boolean
  }
});

// Create the Child model with Mongoose
var Child = mongoose.model("Child", ChildSchema);

// Export it for use elsewhere
module.exports = Child;