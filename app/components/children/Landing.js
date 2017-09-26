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
                <br />
      <div className="checkbox navbar-btn">
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Music
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Sports
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Video Games
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Movies
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Arts & Crafts
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Collectibles
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Building
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Outdoor Recreation
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Educational
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" for="filterUnfulfilled">
                <input type="checkbox" className="autosubmit" id="filterUnfulfilled" value="true" />
                    <a href="#">
                        Special Needs
                    </a> 
                    </label>
                    <br />
                    </div>
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