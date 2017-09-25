// Include React
var React = require("react");

var Landing = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
          Sidebar (filter)
          </div>
          <div className="col-lg-9">
          Content (posts)
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;