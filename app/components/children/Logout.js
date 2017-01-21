var React = require('react');

var Logout = React.createClass ({
	render: function() {
		return (
			<div>
				<a href="/logout" className="btn btn-default"><h4><i className="fa fa-unlock"></i> Logout</h4></a>
			</div>
		);
	}
});

module.exports = Logout;