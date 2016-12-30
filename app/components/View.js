var React = require('react');
var Router = require('react-router');

var helpers = require('../utils/helpers');

var View = React.createClass ({
	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
			<p>Data Views</p>
			</div>
			</div>
			</div>

		)
	}
});

module.exports = View;