var React = require('react');
var Router = require('react-router');

var Profile = require('./Profile');
var Data = require('./Data');

var helpers = require('../utils/helpers');

var UserChoice = React.createClass ({
	getInitialState: function()
	{
		return {
			username: "",
			password: ""
		}
	},


	handleUserChange: function(evet) {
		this.setstate({[event.target.name]: event.target.value});
	},

	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
				<form>
					<div className="form-group text-center">
						<a href="#/data" className="btn btn-default"><h4><i className="fa fa-plus"></i> Enter Data</h4></a>
					</div>
					<div className="form-group text-center">
						<a href="#/view" className="btn btn-default"><h4><i className="fa fa-eye"></i> View Data</h4></a>
					</div>
				</form>
			</div>
			</div>
			</div>

		)
	}
});

module.exports = UserChoice;