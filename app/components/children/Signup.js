import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			parentFirstName: '',
			parentLastName: '',
			email: '',
			password: '',
			zipcode: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				parentFirstName: this.state.parentFirstName,
				parentLastName: this.state.parentLastName,
				email: this.state.email,
				password: this.state.password,
				zipcode: this.state.zipcode
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('You are logged in.');
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('Duplicate information.')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="parentFirstName">First name: </label>
				<input
					type="text"
					name="First name"
					value={this.state.parentFirstName}
					onChange={this.handleChange}
				/>
				<label htmlFor="parentLastName">Last name: </label>
				<input
					type="text"
					name="Last name"
					value={this.state.parentLastName}
					onChange={this.handleChange}
				/>
				<label htmlFor="email">Email address(for username): </label>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="zipcode">Zipcode: </label>
				<input
					type="number"
					name="zipcode"
					value={this.state.zipcode}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default Signup
