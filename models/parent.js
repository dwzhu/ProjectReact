// Include the Mongoose Dependencies
var mongoose = require("mongoose")
var Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ParentSchema = new Schema({
  parentFirstName: {
    type: String,
    required: true
  },
  parentLastName: {
    type: String,
    required: true
  },

  local: {  // Use email as username
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true }
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


// Define schema methods
ParentSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
ParentSchema.pre('save', function(next) {
  if (!this.local.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.local.password = this.hashPassword(this.local.password)
    next()
  }
  // this.password = this.hashPassword(this.password)
  // next()
})

// Create the Parent model with Mongoose
var Parent = mongoose.model("Parent", ParentSchema);

// Export it for use elsewhere
module.exports = Parent;