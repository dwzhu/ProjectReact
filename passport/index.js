const passport = require('passport')
const LocalStrategy = require('./localStrategy')
//const GoogleStratgey = require('./googleStrategy')
const Parent = require('../models/parent')

passport.serializeUser((parent, done) => {
	console.log('=== serialize ... called ===')
	console.log(parent) // the whole raw user object!
	console.log('---------')
	done(null, { _id: parent._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	Parent.findOne(
		{ _id: id },
		'parentFirstName parentLastName local.email',
		(err, parent) => {
			console.log('======= DESERILAIZE USER(PARENT) CALLED ======')
			console.log(parent)
			console.log('--------------')
			done(null, parent)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
//passport.use(GoogleStratgey)

module.exports = passport
