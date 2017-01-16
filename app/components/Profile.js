var React = require('react');
var Router = require('react-router');

var Physician = require('./Physician');

var helpers = require('../utils/helpers');

var Profile = React.createClass ({
	handleUserChange: function(event) {
		this.setState({[event.target.name]: event.target.value});
	},

	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
			<form action="/addUser" method="POST">
				<div className="form-group text-center">
					<h2>User Profile</h2>
				</div>
				<div className="form-group">
				<label htmlFor="name"><strong>Name</strong></label>
					<input type="text" value={this.value} className="form-control" name="name" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="username"><strong>Username</strong></label>
					<input type="text" value={this.value} className="form-control" name="username" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
						<label htmlFor="password"><strong>Password</strong></label>
						<input type="password" value={this.value} className="form-control" name="password" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
						<div><strong>Target Range</strong></div>
						<label htmlFor="min"><strong>Min</strong></label>
						<input type="text" value={this.value} className="form-control" name="targetmin" onChange={this.handleUserChange} required />
						<label htmlFor="max"><strong>Max</strong></label>
						<input type="text" value={this.value} className="form-control" name="targetmax" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
					<select name="userType">
						<option value="User">User</option>
						<option value="Physician">Dietician</option>
					</select>
				</div>
				<div className="form-group text-center">
					<button type="submit" className="btn btn-default" onClick=""><h4><i className="fa fa-user-circle"></i> Create Account</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<div className="form-group text-center">
					<a href="#/physician" className="btn btn-default"><h4><i className="fa fa-plus"></i> Add Physician</h4></a>
				</div>
				</div>
			</form>
			</div>
			</div>
			</div>
		)
	}
});

module.exports = Profile;