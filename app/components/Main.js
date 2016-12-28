//this is the main app component.. sets up the header and static content

//include react & react-router
var React = require('react');
var Search = require('./Login.js');

//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass({
	//every component has to have a render function
	render: function() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1 className="text-center">Diabetic Tracker</h1>
					<p className="lead text-center">Track your diabetic glucose levels!</p> 
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Main;