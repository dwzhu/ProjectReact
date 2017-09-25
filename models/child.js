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
    type: Boolean,
    default: false
  },
  sports: {
    type: Boolean,
    default: false
  },
  videoGames: {
    type: Boolean,
    default: false
  },
  movies: {
    type: Boolean,
    default: false
  },
  artsCrafts: {
    type: Boolean,
    default: false
  },
  collectibles: {
    type: Boolean,
    default: false
  },
  engineering: {
    type: Boolean,
    default: false
  },
  tech: {
    type: Boolean,
    default: false
  },
  outdoor: {
    type: Boolean,
    default: false
  },
  educational: {
  	type: Boolean,
    default: false
  }
});

// Create the Child model with Mongoose
var Child = mongoose.model("Child", ChildSchema);

// Export it for use elsewhere
module.exports = Child;