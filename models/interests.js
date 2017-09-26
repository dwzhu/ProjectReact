// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var InterestsSchema = new Schema({
  
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
  outdoors: {
    type: Boolean,
    default: false
  },
  educational: {
  	type: Boolean,
    default: false
  }
});

// Create the Interest model with Mongoose
var Interest = mongoose.model("Interest", InterestsSchema);

// Export it for use elsewhere
module.exports = Interest;