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
          <ul> 
          <li>Music</li>
          <li>Sports</li>
          <li>Video Games</li>
          <li>Movies</li>
          <li>Arts & Crafts</li>
          <li>Building</li>
          <li>Outdoor Recreation</li>
          <li>Educational</li>
          </ul>
          </div>

      <div className="col-lg-9">
          Content (posts)
          <div class="panel panel-default">
          <div class="panel-heading">
          <i class="fa fa-calendar" aria-hidden="true"></i> Results
          </div>
          <div class="panel-body" id="results">
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;