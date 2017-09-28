const Parent = require('../models/parent')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		Parent.findOne({ 'local.email': email }, (err, userMatch) => {
			console.log("local strategy");

			if (err) {
				console.log("Local Strategy: " + err);
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email username' })
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		})
	}
)

module.exports = strategy
