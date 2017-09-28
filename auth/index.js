const express = require('express')
const app = express.Router()
const Parent = require('../models/parent')
const passport = require('../passport')

//router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
//router.get(
	//'/google/callback',
	//passport.authenticate('google', {
		//successRedirect: '/',
		//failureRedirect: '/login'
	//})
//)

// this route is just used to get the user basic info
app.get('/parent', (req, res, next) => {
	console.log('===== parent!!======')
	console.log(req.parent)
	if (req.parent) {
		return res.json({ parent: req.parent })
	} else {
		return res.json({ parent: null })
	}
})

app.post(
	'/api/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const parent = JSON.parse(JSON.stringify(req.parent)) // hack
		const cleanUser = Object.assign({}, parent)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ parent: cleanUser })
	}
)

app.post('/logout', (req, res) => {
	if (req.parent) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'Logging you out.' })
	} else {
		return res.json({ msg: 'No user to log out!' })
	}
})

app.post('/signup', (req, res) => {
	var { parentFirstName, parentLastName, email, password, zipcode } = req.body
	// ADD VALIDATION
	Parent.findOne({ 'local.email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, there's already a user with the same email username: ${email}`
			})
		}
		// Add new Parent information to the database
		const newParent = new Parent({
			'parentFirstName': parentFirstName,
			'parentLastName': parentLastName,
			'local.email': email,
			'local.password': password,
			'zipcode': zipcode
		})
		newParent.save((err, savedParent) => {
			if (err) return res.json(err)
			return res.json(savedParent)
		})
	})
})

module.exports = app
