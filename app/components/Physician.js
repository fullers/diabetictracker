var React = require('react');
var Router = require('react-router');

var helpers = require('../utils/helpers');

var Physician = React.createClass ({
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
					<label htmlFor="email"><strong>email</strong></label>
					<input type="email" value={this.value} className="form-control" id="username" onChange="" required />
				</div>
				<div className="form-group">
						
				</div>
				
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-plus"></i> Add</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<button type="button" className="btn btn-default" onClick=""><h4><i className="fa fa-arrow-left"></i> Back</h4>
					</button>
				</div>
			</form>
			</div>
			</div>
			</div>
		)
	}
});

module.exports = Physician;