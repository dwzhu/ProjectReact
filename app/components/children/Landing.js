// Include React
var React = require("react");

var Landing = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="sidebar col-lg-3">
          SIDEBAR
          </div>
          <div className="content col-lg-9">
          CONTENT
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;
