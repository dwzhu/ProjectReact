// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");

// Include the main Parent Component
//var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Main)
//ReactDOM.render(<Main />, document.getElementById("app"));

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(routes, document.getElementById("app"));