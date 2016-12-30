var React = require('react');
var Router = require('react-router');

var view = require('./View');

var helpers = require('../utils/helpers');

var Data = React.createClass ({
	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
			<form>
				<div className="form-group">
				<label htmlFor="date"><strong>Date</strong></label>
					<input type="date" value={this.value} className="form-control" id="date" onChange="" required />
				</div>
				<div className="form-group">
					<label htmlFor="time"><strong>Time</strong></label>
					<input type="time" value={this.value} className="form-control" id="time" onChange="" required />
				</div>
				<div className="form-group">
				<label htmlFor="level"><strong>Glucose Level (mg/dl)</strong></label>
					<input type="text" value={this.value} className="form-control" id="level" onChange="" required />
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-plus"></i> Add</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-eye"></i> View</h4>
					</button>
				</div>
			</form>
			</div>
			</div>
			</div>
		)
	}
});

module.exports = Data;