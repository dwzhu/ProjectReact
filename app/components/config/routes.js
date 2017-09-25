var express = require("express");
var path = require("path");

// Import the Parent and Child models
var Parent = require('../models/Parent.js');
var Child = require('../models/Child.js');

//var apiRoutes = require("./apiRoutes");

var app = new express.app();

// Use the apiRoutes module for any routes starting with "/api"
//app.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React app will handle routing within the app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



// Parents Page Render
app.get('/parents', function(req, res) {

  // Search MongoDB for all parent entries (sort newest to top, assuming Ids increment)
  parent.find().sort({
      _id: -1
    })

    // But also populate all of the children associated with the parents.
    .populate('children')

    // Then, send them to the handlebars template to be rendered
    .exec(function(err, doc) {
      // log any errors
      if (err) {
        console.log(err);
      }
      // or send the doc to the browser as a json object
      else {
        var hbsObject = {
          parents: doc
        }
        res.render('index', hbsObject);
        // res.json(hbsObject)
      }
    });
});




// Add a Child Route
app.post('/add/child/:id', function(req, res) {

  // Collect parent id
  var parentId = req.params.id;

  // Collect Child's First Name
  var childFirstName = req.body.childFirstName;

  // Collect Child's Last Name
  var childLastName = req.body.childLastName;

  // Collect Child's Age
  var age = req.body.age;

  // Collect Child's Gender
  var gender = req.body.gender;

  // Categories
  var music = req.body.music;
  var sports = req.body.sports;
  var videoGames = req.body.videoGames;
  var movies = req.body.movies;
  var artsCrafts = req.body.artsCrafts;
  var collectibles = req.body.collectibles;
  var engineering = req.body.engineering;
  var tech = req.body.tech;
  var outdoor = req.body.outdoor;
  var educational = req.body.educational;


  // "result" object has the exact same key-value pairs of the "Child" model
  var result = {
    childFirstName: childFirstName,
    childLastName: childLastName,
    age: age,
    gender: gender,
    music: music,
    sports: sports,
    videoGames: videoGames,
    movies: movies,
    artsCrafts: artsCrafts,
    collectibles: collectibles,
    engineering: engineering,
    tech: tech,
    outdoor: outdoor,
    educational: educational
  };

  // Using the Child model, create a new child entry
  var entry = new child(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
    // Or, relate the child to the parent
    else {
      // Push the new child to the list of children in the parent
      parent.findOneAndUpdate({
          '_id': parentId
        }, {
          $push: {
            'children': doc._id
          }
        }, {
          new: true
        })
        // execute the above query
        .exec(function(err, doc) {
          // log any errors
          if (err) {
            console.log(err);
          } else {
            // Send Success Header
            res.sendStatus(200);
          }
        });
    }
  });

});


// Delete a child Route
app.post('/delete/child/:id', function(req, res) {

  // Collect child id
  var childId = req.params.id;

  // Find and Delete the child using the Id
  child.findByIdAndRemove(childId, function(err, todo) {

    if (err) {
      console.log(err);
    } else {
      // Send Success Header
      res.sendStatus(200);
    }

  });
});


// Add a parent Route
app.post('/add/parent/:id', function(req, res) {

  // Collect parent id
  var parentId = req.params.id;

  // Collect Parent's First Name
  var parentFirstName = req.body.parentFirstName;

  // Collect Parent's Last Name
  var parentLastName = req.body.parentLastName;

  // Collect Email Address(username)
  var email = req.body.email;

  // Collect Password
  var password = req.body.password;

  // Collect Zipcode
  var zipcode = req.body.zipcode;


  // "result" object has the exact same key-value pairs of the "Parent" model
  var result = {
    parentFirstName: parentFirstName,
    parentLastName: parentLastName,
    email: email,
    password: password,
    zipcode: zipcode
  };

  // Using the Parent model, create a new parent entry
  var entry = new parent(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
  });
});
  



// Delete a parent Route
app.post('/delete/parent/:id', function(req, res) {

  // Collect parent id
  var parentId = req.params.id;
  console.log("Deleted parent");

  // Find and delete the parent using the Id
  parent.findByIdAndRemove(parentId, function(err, todo) {

    if (err) {
      console.log(err);
    } else {
      // Send Success Header
      //res.sendStatus(200);
      console.log("Deleted parent successfully");
      // Display all the parents
      res.redirect("/parents");
    }
  });
 });




module.exports = app;
