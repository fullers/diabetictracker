var React = require('react');
var Router = require('react-router');

var helpers = require('../utils/helpers');

var Physician = React.createClass ({
	getInitialState: function() {
        return { 
            name: "",
            email: ""
        };
    },
    componentDidMount: function(event) {

       event.preventDefault();
       
       helpers.getCurrentUser().then(function(response) {
          if (response !== this.state.username) {
            this.setState({ username: response.data.username });
          }
        }.bind(this));
       helpers.addPhysician().then(function(response) {
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

    	helpers.addPhysician(this.state.name, this.state.email).then(function() {
    		console.log('handleAddForm', response);
    		this.state.usr_id = response.usr._id;

    	}).bind(this);
    },
	render: function() {
		return (
			<div className="row">
			<div className="col-md-6 col-md-offset-2">
			<div className="well well-sm">
			<form action="/addPhysician" method="POST" onSubmit={this.handleAddForm}>
				<div className="form-group text-center">
					<h2>Physician Information</h2>
				</div>
				<div className="form-group">
					<label htmlFor="name"><strong>Name</strong></label>
					<input type="text" value={this.state.value} className="form-control" name="name" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="email"><strong>email</strong></label>
					<input type="email" value={this.state.value} className="form-control" name="email" onChange={this.handleUserChange} required />
				</div>
				<div className="form-group">
					<select className="selectType" name="physcianType">
						<option value="Doctor">Doctor</option>
						<option value="Dietician">Dietician</option>
					</select>
				</div>
				
				<div className="form-group text-center">
					<button type="submit" className="btn btn-default" onClick=""><h4><i className="fa fa-plus"></i> Add</h4>
					</button>
				</div>
				<div className="form-group text-center">
					<div className="form-group text-center">
					<a href="#/profile" className="btn btn-default"><h4><i className="fa fa-arrow-left"></i> Back</h4></a>
				</div>	
				</div>
			</form>
			</div>
			</div>
			</div>
		)
	}
});

module.exports = Physician;