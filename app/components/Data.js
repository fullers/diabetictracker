var React = require('react');
var Router = require('react-router');

var view = require('./View');

var helpers = require('../utils/helpers');

var Data = React.createClass ({
	getInitialState: function() {
        return { 
            username: "",
            date: "",
            time: "",
            level: ""
        };
    },
    componentDidMount: function() {
       helpers.getCurrentUser().then(function(response) {
          if (response !== this.state.username) {
            this.setState({ username: response.data.username });
          }
        }.bind(this));
       helpers.addData().then(function(response) {
          if (response !== this.state.data) {
            this.setState({ data: response.data });
          }
        }.bind(this));
    },
    handleUserChange(event) {
       this.setState({ [event.target.name]: event.target.value});
    },
    handleAddForm: function(event) {
    	event.preventDefault();

    	helpers.addData(this.state.date, this.state.time, this.state.level).then(function() {
    		console.log('handleAddForm', response);
    		this.state.usr_id = response.usr._id;

    	}.bind(this));
    },
	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-3">
			<div className="well well-sm">
			<form action="/addData" method="POST" onSubmit={this.handleAddForm}>
				<div className="form-group text-center">
					<h2>Enter Data</h2>
				</div>
				<div className="form-group">
				<label htmlFor="date"><strong>Date</strong></label>
					<input type="date" value={this.state.value} className="form-control" name="date" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="time"><strong>Time</strong></label>
					<input type="time" value={this.state.value} className="form-control" name="time" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
				<label htmlFor="level"><strong>Glucose Level (mg/dl)</strong></label>
					<input type="text" value={this.state.value} className="form-control" name="level" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group text-center">
					<button type="submit" className="btn btn-default" onClick=""><h4><i className="fa fa-plus"></i> Add</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<a href="#/view" className="btn btn-default"><h4><i className="fa fa-eye"></i> View</h4></a>
				</div>
			</form>
			</div>
			</div>
			</div>
		)
	}
});

module.exports = Data;