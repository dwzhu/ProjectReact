// Include React
var React = require("react");

var Login = React.createClass({

  // Here we render the component
  render: function() {

    return (

<div className="loginsignup">
        <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                	
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text">
                            <h1><strong>PlayMeet</strong> Login &amp; Register Forms</h1>
                            <div className="description">
                            	<p>
	                            	PlayMeet is a free open-source web-based app for <strong> parents, children & communities</strong> to connect. 
	                            	Fork the repository on <a href="https://github.com/thkropp1/ProjectReact" target="_blank"><strong>GitHub</strong></a>, 
	                            	customize and use it as you like!
                            	</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-5">
                        	
                        	<div className="form-box">
	                        	<div className="form-top">
	                        		<div className="form-top-left">
	                        			<h3>Login to our site</h3>
	                            		<p>Enter username and password to log on:</p>
	                        		</div>
	                        		<div className="form-top-right">
	                        			<i className="fa fa-lock"></i>
	                        		</div>
	                            </div>
	                            <div className="form-bottom">
				                    <form role="form" action="/login" method="post" className="login-form">
				                    	<div className="form-group">
				                        	<label className="sr-only" for="email">Email</label>
				                        	<input type="email" name="email" placeholder="Username..." className="form-email form-control" id="form-email" required/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="password">Password</label>
				                        	<input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" required/>
				                        </div>
				                        <button onClick={
				                        ()=>props.changepagestate("Landing")
				                        } type="submit" className="btn btn-primary">Login</button>
				                    </form>
			                    </div>
		                    </div>
		                
		                	<div className="social-login">
	                        	<h3>...or login with:</h3>
	                        	<div className="social-login-buttons">
		                        	<a className="btn btn-link-2" href="#">
		                        		<i className="fa fa-facebook"></i> Facebook
		                        	</a>
		                        	<a className="btn btn-link-2" href="#">
		                        		<i className="fa fa-twitter"></i> Twitter
		                        	</a>
		                        	<a className="btn btn-link-2" href="#">
		                        		<i className="fa fa-google-plus"></i> Google Plus
		                        	</a>
	                        	</div>
	                        </div>
	                        
                        </div>
                        
                        <div className="col-sm-1 middle-border"></div>
                        <div className="col-sm-1"></div>
                        	
                        <div className="col-sm-5">
                        	
                        	<div className="form-box">
                        		<div className="form-top">
	                        		<div className="form-top-left">
	                        			<h3>Sign up now</h3>
	                            		<p>Fill in the form below to get instant access:</p>
	                        		</div>
	                        		<div className="form-top-right">
	                        			<i className="fa fa-pencil"></i>
	                        		</div>
	                            </div>
	                            <div className="form-bottom">
				                    <form role="form" action="/add/parent" method="post" className="registration-form">
				                    	<div className="form-group">
				                    		<label className="sr-only" for="parentFirstName">First Name</label>
				                        	<input type="text" name="parentFirstName" placeholder="First Name..." className="form-first-name form-control" id="form-first-name" required/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="parentLastName">Last Name</label>
				                        	<input type="text" name="parentLastName" placeholder="Last Name..." className="form-last-name form-control" id="form-last-name" required/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="email">Email</label>
				                        	<input type="email" name="email" placeholder="Email Address(username)..." className="form-email form-control" id="form-email" required/>
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="password">Password</label>
				                        	<input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" required/>
				                        </div>
				                        <div className="form-group">
                                            <label className="sr-only" for="zipcode">Zip Code</label>
				                        	<input type="number" name="zipcode" placeholder="Zip Code..." className="form-zipcode form-control" id="form-zipcode" />
				                        </div>
				                        <button onClick={
				                        ()=>props.changepagestate("Landing")
				                        } type="submit" className="btn btn-primary">Sign me up!</button>
				                    </form>
			                    </div>
                        	</div>
                        	
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>

        <footer>
        	<div className="container">
        		<div className="row">
        			<br>
        			</br>
        			<br>
        			</br>
        			<br>
        			</br>
        			<div className="col-sm-8 col-sm-offset-2">
        				<div className="footer-border"></div>
        				<p>Developed by Teresa Kropp, Onik Ter-Tatevossian, Lyle Horowitz & David Zhu</p>
        			</div>
        			
        		</div>
        	</div>
        </footer>
</div>

    );
  }
});


// Export the component back for use in other files
module.exports = Login;