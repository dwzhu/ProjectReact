import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

export default class Login extends Component {

    handleSubmit(event) {
        const username = findDOMNode(this.refs.username)
        const password = findDOMNode(this.refs.password)
        const creds = { username: username.value.trim(), password: password.value.trim() }
        this.props.onLoginClick(creds)
    }

    render() {
        const {errorMessage} = this.props

        return (
            <Form inline>
                <FormGroup controlId="formHorizontalEmail">
                    <ControlLabel>Email </ControlLabel>
                    <FormControl type="username" ref="username" onChange={this.handleChange} placeholder="Email" />
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <ControlLabel>Password </ControlLabel>
                    <FormControl type="password" ref="password" onChange={this.handleChange} placeholder="Password" />
                </FormGroup>
                <Button onClick={(event) => this.handleSubmit(event)}>Login</Button>
                {errorMessage &&
                <p style={{color:'red'}}>{errorMessage}</p>
                }
            </Form>
        )
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}