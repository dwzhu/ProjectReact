// Include React
var React = require("react");

var Landing = require("./children/Landing.js");
var Login = require("./children/Login.js");

var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container-fluid">
        <Login />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;