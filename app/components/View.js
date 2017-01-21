var React = require('react');
var Router = require('react-router');

var helpers = require('../utils/helpers');

var View = React.createClass ({
	 getInitialState: function() {
        return {
            getData: [],
        };
    },

    componentDidMount: function() {
        helpers.getData().then(function(response) {
            if (response !== this.state.getData) {
                this.setState({ getData: response.data });
            }
        }.bind(this));
    },

	render: function() {
		return (
			<div className="container">
			<div className="row">
			<div className="col-md-6 col-md-offset-2">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Data View</h3>
			    </div>
			    <div className="panel-body">
				    <div id="dataview">
		  				<table className="table table-striped">
		  					<thead>
		  						<th>Date</th>
		  						<th>Time</th>
		  						<th>Glucose Level (mg/dl)</th>
		  					</thead>
		  					<tbody>
		  						{this.state.getData.map(function(data, i) {
	                        return (
		                            <tr key={i}>
		                                <td>
		                                    {data.date}
		                                </td>
		                                <td>
		                                    {data.time}
		                                </td>
		                                <td>
		                                    {data.level}
		                                </td>
		                            </tr>
	                        	);
                    		}, this)}
		  					</tbody>
		  				</table>
		  			</div>
				</div>
			</div>
			</div>
			</div>
			<div className="row">
			<div className="col-md-6 col-md-offset-2">
			<div className="well well-sm">
				<form>
					<div className="form-group text-center">
						<a href="#/data" className="btn btn-default"><h4><i className="fa fa-plus"></i> Enter Data</h4></a>
					</div>
				</form>
			</div>
			</div>
			</div>
			</div>


		)
	}
});

module.exports = View;