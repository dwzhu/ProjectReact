// Include React
var React = require("react");

var Landing = require("./children/Landing.js");
var Login = require("./children/Login.js");


var Main = React.createClass({

	getInitialState: function(){
	return{	currentpage: "Landing" }
	},
	
	renderpage: function(){
	
		if (this.state.currentpage === "Login")
			{return <Login getpagestate = {this.changepagestate}/>}
		if (this.state.currentpage === "Landing")
			{return <Landing /> }
	},
	
	changepagestate: function(pageName){
	
		this.setState({
			currentpage: pageName
		})
	
	},


// Here we render the component
  render: function() {

    return (
      <div className="container-fluid">
        {this.renderpage()}
      </div>
    );
  }

});

// Export the component back for use in other files
module.exports = Main;