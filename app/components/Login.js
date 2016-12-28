var React = require('react');
var Router = require('react-router');

var helpers = require('../utils/helpers');

var Login = React.createClass ({
	getInitialState: function() {
		return{
			'username': "",
			'password': ""
	},

	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit: function(){

		this.props.updateSearch(this.state.term, this.state.start, this.state.end);
		return false;
	},
	render: function() {
		return (
			<div className="well well-sm">
				<form>
					<div className="form-group">
						<label htmlFor="username"><strong>Username</strong></label>
						<input type="text" value={this.state.value} className="form-control" id="username" onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label htmlFor="password"><strong>Password</strong></label>
						<input type="text" value={this.state.value} className="form-control" id="password" onChange={this.handleChange} required />
					</div>
					<button type="button" className="btn btn-default" onClick={this.handleSubmit}> <h4> <span className="glyphicon glyphicon-search"></span>  Search </h4>
					</button>
				</form>
			</div>

		)
	}
	}
});

module.exports = Login;