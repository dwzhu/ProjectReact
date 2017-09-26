// Include React
var React = require("react");

var Landing = React.createClass({

  // Here we render the component
  render: function() {

    return (

<div className="page-header">
  <h1>PlayMeet</h1>

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
          </div>

      <div className="results">
          <br />
          <div className="panel panel-default">
          <div className="panel-heading">
          <i className="fa fa-globe" aria-hidden="true"></i> Results
          </div>
          <div className="panel-body" id="results">
          </div>
          </div>
          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Landing;