// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ParentSchema = new Schema({
  Parentname: {
    type: String
  },
  Children: [{
  	childName: String
  }]
});

// Create the Model
var Parent = mongoose.model("Parent", ParentSchema);

// Export it for use elsewhere
module.exports = Parent;