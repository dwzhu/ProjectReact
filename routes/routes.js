var express = require("express");
var path = require("path");
var passport = require('../passport')

// Import the Parent and Child models
var Parent = require('../models/parent');
var Child = require('../models/child');
var Interests = require('../models/interests');
var SpecialNeeds = require('../models/special_needs');

//var apiRoutes = require("./apiRoutes");


// Use the apiRoutes module for any routes starting with "/api"
//app.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React app will handle routing within the app

var routes = function(app) {

// Validate login information
//app.post("/login", passport.authenticate("local"), function(req, res) {
    // They won't get this or even be able to access this page if they aren't authed
   // res.redirect('/Landing');
//});

app.post('/login', passport.authenticate('local', { successRedirect: '/Landing',
                                                    failureRedirect: '/Login' }));


app.post("/logout", (req, res) => {

  console.log("Logging out");
  if (req.user) {
    req.session.destroy()
    res.clearCookie('connect.sid') // clean up!
    //return res.json({ msg: 'logging you out' })
    res.redirect('/Login');
  } else {
    return res.json({ msg: 'No user to log out!' })
  }
})


// Parents Page Render
app.get('/parents', function(req, res) {

  // Search MongoDB for all parent entries (sort newest to top, assuming Ids increment)
  Parent.find().sort({
      _id: -1
    })

    // But also populate all of the children associated with the parents.
    .populate('children')

    // Then, send them to the Main page to be rendered
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
        //res.render('index', hbsObject);
        res.json(hbsObject)
      }
    });
});


// Children Page Render
app.get('/children', function(req, res) {

  // Search MongoDB for all children entries (sort newest to top, assuming Ids increment)
  Child.find().sort({
      _id: -1
    })

    // But also populate all of the interests and special needs associated with the children.
    .populate('interests')
    .populate('specialNeeds')

    // Then, send them to the Main page to be rendered
    .exec(function(err, doc) {
      // log any errors
      if (err) {
        console.log(err);
      }
      // or send the doc to the browser as a json object
      else {
        var hbsObject = {
          children: doc
        }
        //res.render('index', hbsObject);
        res.json(hbsObject)
      }
    });
});


// Interests Page Render
app.get('/interests', function(req, res) {

  // Search MongoDB for all interests entries (sort newest to top, assuming Ids increment)
  Interests.find().sort({
      _id: -1
    })

    // Then, send them to the Main page to be rendered
    .exec(function(err, doc) {
      // log any errors
      if (err) {
        console.log(err);
      }
      // or send the doc to the browser as a json object
      else {
        var hbsObject = {
          interests: doc
        }
        //res.render('index', hbsObject);
        res.json(hbsObject)
      }
    });
});


// Special Needs Page Render
app.get('/special_needs', function(req, res) {

  // Search MongoDB for all interests entries (sort newest to top, assuming Ids increment)
  SpecialNeeds.find().sort({
      _id: -1
    })

    // Then, send them to the Main page to be rendered
    .exec(function(err, doc) {
      // log any errors
      if (err) {
        console.log(err);
      }
      // or send the doc to the browser as a json object
      else {
        var hbsObject = {
          specialneeds: doc
        }
        //res.render('index', hbsObject);
        res.json(hbsObject)
      }
    });
});


// Add a parent Route
app.post('/add/parent', function(req, res) {

  console.log(req.body);

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
    local:{email: email,
    password: password},
    zipcode: zipcode
  };

  // Validation
  Parent.findOne({ 'local.email': email }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        error: `Sorry, there's already a user with the username: ${email}`
      })
    }
  })

  // Using the Parent model, create a new parent entry
  var entry = new Parent(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
  // Send new user back to Login  
  res.redirect('/Login');
  });
});




// Add a Child Route
app.post('/add/child/:id', function(req, res) {
//app.post('/add/child', function(req, res) {

  // Collect parent id
  var parentId = req.params.id;
  //var parentId = "59cbe7b5e956963e4c382293";

  // Collect Child's First Name
  var childFirstName = req.body.childFirstName;


  // Collect Child's Last Name
  var childLastName = req.body.childLastName;

  // Collect Child's Age
  var age = req.body.age;

  // Collect Child's Gender
  var gender = req.body.gender;


  // "result" object has the exact same key-value pairs of the "Child" model
  var result = {
    childFirstName: childFirstName,
    childLastName: childLastName,
    age: age,
    gender: gender
  };

  console.log(result);

  // Using the Child model, create a new child entry
  var entry = new Child(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
    // Or, relate the child to the parent
    else {
      console.log("add child");
      // Push the new child to the list of children in the parent
      Parent.findOneAndUpdate({
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



// Add an Interests Route
app.post('/add/interests/:id', function(req, res) {
//app.post('/add/interests', function(req, res) {

  // Collect child id
  var childId = req.params.id;
  console.log(childId);
  //childId = "59cbe7b5e956963e4c382293";

  // Categories
  var music = req.body.music;
  var sports = req.body.sports;
  var videoGames = req.body.videoGames;
  var movies = req.body.movies;
  var artsCrafts = req.body.artsCrafts;
  var collectibles = req.body.collectibles;
  var engineering = req.body.engineering;
  var tech = req.body.tech;
  var outdoors = req.body.outdoors;
  var educational = req.body.educational;

  // "result" object has the exact same key-value pairs of the "Interests" model
  var result = {
    music: music,
    sports: sports,
    videoGames: videoGames,
    movies: movies,
    artsCrafts: artsCrafts,
    collectibles: collectibles,
    engineering: engineering,
    tech: tech,
    outdoors: outdoors,
    educational: educational
  };

  // Using the Interests model, create a new Interest entry
  var entry = new Interests(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
    // Or, relate the Interest to the child
    else {
      // Push the new Interest to the list of Interests in the child
      Child.findOneAndUpdate({
          '_id': childId
        }, {
          $push: {
            'Interest': doc._id
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



// Add a Special Needs Route
app.post('/add/needs/:id', function(req, res) {
//app.post('/add/needs', function(req, res) {

  // Collect child id
  var childId = req.params.id;
  //childId = "59cbe7b5e956963e4c382293";

  // Categories
  var autism = req.body.autism;
  var blind = req.body.blind;
  var deaf = req.body.deaf;
  var ADHD = req.body.ADHD;
  var other = req.body.other;

  // "result" object has the exact same key-value pairs of the "Interests" model
  var result = {
    autism: autism,
    blind: blind,
    deaf: deaf,
    ADHD: ADHD,
    other: other
  };

  // Using the SpecialNeeds model, create a new SpecialNeed entry
  var entry = new SpecialNeeds(result);

  // Save the entry to the database
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    }
    // Or, relate the Special Needs to the child
    else {
      // Push the new special need to the list of Special Needs in the child
      Child.findOneAndUpdate({
          '_id': childId
        }, {
          $push: {
            'specialNeed': doc._id
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
  Child.findByIdAndRemove(childId, function(err, todo) {

    if (err) {
      console.log(err);
    } else {
      // Send Success Header
      res.sendStatus(200);
    }

  });
});




// Delete a parent Route
app.post('/delete/parent/:id', function(req, res) {

  // Collect parent id
  var parentId = req.params.id;
  console.log("Deleted parent");

  // Find and delete the parent using the Id
  Parent.findByIdAndRemove(parentId, function(err, todo) {

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

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

}

module.exports = routes;
