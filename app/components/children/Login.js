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
	                            	PlayMeet is a free open-source web-based app for <strong>parents, children & communities</strong> to connect. 
	                            	Fork the repository on <a href="https://github.com/dwzhu/ProjectReact" target="_blank"><strong>GitHub</strong></a>, 
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
				                    <form role="form" action="" method="post" className="login-form">
				                    	<div className="form-group">
				                    		<label className="sr-only" for="form-username">Username</label>
				                        	<input type="text" name="form-username" placeholder="Username..." class="form-username form-control" id="form-username" />
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="form-password">Password</label>
				                        	<input type="password" name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" />
				                        </div>
				                        <button type="submit" className="btn">Sign in!</button>
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
				                    <form role="form" action="" method="post" className="registration-form">
				                    	<div className="form-group">
				                    		<label className="sr-only" for="form-first-name">First & Last name</label>
				                        	<input type="text" name="form-first-name" placeholder="First & Last name..." className="form-first-name form-control" id="form-first-name" />
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="form-last-name">Username</label>
				                        	<input type="text" name="form-last-name" placeholder="Username..." className="form-last-name form-control" id="form-last-name" />
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="form-email">Email</label>
				                        	<input type="text" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email" />
				                        </div>
				                        <div className="form-group">
				                        	<label className="sr-only" for="form-about-yourself">About yourself (and your children)</label>
				                        	<textarea name="form-about-yourself" placeholder="About yourself (and your children)..." 
				                        				className="form-about-yourself form-control" id="form-about-yourself"></textarea>
				                        </div>
				                        <button type="submit" className="btn">Sign me up!</button>
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