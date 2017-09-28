// Include React
var React = require("react");

var Landing = React.createClass({

getInitialState: function(){
    return{ search: "https://www.google.com/maps/embed/v1/search?q=s&key=AIzaSyBeOwninWb0rd91LqSDxOzfpaneHuL9Klo"}
    
    },

    filterFunction: function(event){
    var search = event.target.id
    this.setState({search: "https://www.google.com/maps/embed/v1/search?q=" + search +
        "s&key=AIzaSyBeOwninWb0rd91LqSDxOzfpaneHuL9Klo"})
    },
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
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="music" value="true" />
                    <a href="#">
                        Music
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="sports" value="true" />
                    <a href="#">
                        Sports
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="videogames" value="true" />
                    <a href="#">
                        Video Games
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="movies" value="true" />
                    <a href="#">
                        Movies
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="artsandcrafts" value="true" />
                    <a href="#">
                        Arts & Crafts
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="collectibles" value="true" />
                    <a href="#">
                        Collectibles
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="building" value="true" />
                    <a href="#">
                        Building
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="outdoorrecreation" value="true" />
                    <a href="#">
                        Outdoor Recreation
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="educational" value="true" />
                    <a href="#">
                        Educational
                    </a> 
                    </label>
                    <br />
            <label className="navbar-link" htmlFor="filterUnfulfilled">
                <input type="checkbox" onClick={this.filterFunction} className="autosubmit" id="specialneeds" value="true" />
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
          <iframe width='600' height='450' frameBorder='0' src= {this.state.search}> </iframe>
          </div>
          </div>
          </div>
        </div>
    );
  }
});

// Export the component back htmlFor use in other files
module.exports = Landing;