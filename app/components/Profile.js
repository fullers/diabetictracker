var React = require('react');
var Router = require('react-router');

var Physician = require('./Physician');

var helpers = require('../utils/helpers');

var Profile = React.createClass ({

	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
			<form>
				<div className="form-group">
				<label htmlFor="name"><strong>Name</strong></label>
					<input type="text" value={this.value} className="form-control" id="name" onChange="" required />
				</div>
				<div className="form-group">
					<label htmlFor="username"><strong>Username</strong></label>
					<input type="text" value={this.value} className="form-control" id="username" onChange="" required />
				</div>
				<div className="form-group">
						<label htmlFor="password"><strong>Password</strong></label>
						<input type="password" value={this.value} className="form-control" id="password" onChange="" required />
				</div>
				<div className="form-group">
						<div><strong>Target Range</strong></div>
						<label htmlFor="min"><strong>Min</strong></label>
						<input type="text" value={this.value} className="form-control" id="min" onChange="" required />
						<label htmlFor="max"><strong>Max</strong></label>
						<input type="text" value={this.value} className="form-control" id="max" onChange="" required />
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-user-circle"></i> Create Account</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-plus"></i> Add Physician</h4>
					</button>
				</div>
			</form>
			</div>
			</div>
			</div>

		)
	}
});

module.exports = Profile;