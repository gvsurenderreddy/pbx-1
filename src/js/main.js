//Main Component
var Main = React.createClass({
	render: function(){
		return(
			<div className="Main">
				<Table />
			</div>
		)
	}
});

var Table = React.createClass({
	render: function(){
		return(
			<div className="TableSectionWrapper">
				<div className="TableSectionWrapper__tableHeader">Active Subscribers</div>
				<table className="table">
					<thead>
						<tr>
							<th>Extension Number</th>
							<th>SIP Address</th>
							<th>Subscriber name</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
						</tr>
						<tr>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
						</tr>
						<tr>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
							<td>Bla Bla Bla</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
});

module.exports=Main;