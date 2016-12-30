var React = require('react');
var Router = require('react-router');

var Profile = require('./Profile');
var Data = require('./Data');

var helpers = require('../utils/helpers');

var Login = React.createClass ({
	// getInitialState: function(){
	// 	return{
	// 		'username': "",
	// 		'password': ""
	// },

	// handleChange: function(event){
	// 	var newState = {};
	// 	newState[event.target.id] = event.target.value;
	// 	this.setState(newState);
	// },
	// handleSubmit: function(){

	// 	// this.props.updateSearch(this.state.term, this.state.start, this.state.end);
	// 	// return false;
	// },
	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
				<form>
					<div className="form-group">
						<label htmlFor="username"><strong>Username</strong></label>
						<input type="text" value="" className="form-control" id="username" onChange="" required />
					</div>
					<div className="form-group">
						<label htmlFor="password"><strong>Password</strong></label>
						<input type="text" value="" className="form-control" id="password" onChange="" required />
					</div>
					<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-lock"></i> Login</h4>
					</button>
					</div>
					<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-user-circle"></i> Create</h4>
					</button>
					</div>
				</form>
			</div>
			</div>
			</div>

		)
	}
});

module.exports = Login;