import React, { Component } from 'react'
import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox } from 'react-bootstrap'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookie';

const responseGoogle = (response) => {
  console.log(response.accessToken)
  axios.post('https://api.tech/sessions/google', {
    google_token: response.accessToken
  })
  .then(function (response) {
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo);
    console.log(response);
    LoginModal.setState({ showModal: false });
  })
  .catch(function (error) {
    console.log(error);
  });
}
const responseFacebook = (response) => {
  console.log(response.accessToken)
  axios.post('https://api.tech/sessions/facebook', {
    facebook_token: response.accessToken
  })
 .then(function (response) {
    console.log(response); 
    var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
    cookie.save('user', userInfo);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default class LoginModal extends Component {
  constructor() {
    super();
    this.render.bind(this);
    this.state = {showModal: false}
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  login() {
    console.log(this)
    axios.post('https://api.tech/sessions', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
      var userInfo = {id: response.data.data.id, token: response.data.data.attributes['auth-token']}
      cookie.save('user', userInfo);
      // console.log(response);
      // var user = cookie.load('user');
      // console.log("hello");
      // console.log(user);

      //this.setState({ showModal: false });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

    handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }
  render () {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <div>
        <span onClick={this.open.bind(this)}>Log In</span>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)} className="modal-wrapper login-modal-wrapper">
          <Modal.Body>
            <Nav bsStyle='pills'   activeKey={this.eventKey}  onSelect={this.handleSelect}>
              <NavItem eventKey={1} title="Item" ><span className="login-nav-tab">Log In</span></NavItem>
              <NavItem eventKey={1} title="Item" ><span className="login-nav-tab">Sign Up</span></NavItem>
            </Nav>
            <form>
              <FormGroup >
                    <input value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Email"/>
              </FormGroup>
              <FormGroup>
                <input value={this.state.password} onChange={this.handlePasswordChange} className="form-control" placeholder="Password"/>
              </FormGroup>
              <Row className='top-space'>
                  <Col sm={6}>
                    <Checkbox className="checkbox-login"> Remember Me </Checkbox>
                  </Col>
                  <Col sm={6} className='forgot-password'>
                    <a href="">Forgot Password</a>
                  </Col>
                </Row>
                <Row className='top-space'>
                  <Col md={12}>
                    <Button onClick={this.login.bind(this)} className="btn btn-black btn-block">Login</Button>
                  </Col>
                </Row>
              </form>
            <div className="social-signup">
              <span className="divider-or">OR</span>
              <p>
                Sign in with social account
              </p>
              <Row>
                <Col xs={6}>
                  <GoogleLogin
                  className='btn btn-block btn-google'
                  clientId=""
                  buttonText="Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
                </Col>
                <Col xs={6}>
                  <FacebookLogin
                  className='btn btn-block btn-facebook'
                  appId=""
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  onSuccess={this.close.bind(this)}
                  cssClass="btn btn-block btn-facebook"
                />
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-black" onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}
