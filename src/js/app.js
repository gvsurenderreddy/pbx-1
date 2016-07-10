var logger = require("react-logger");



//Header Component
var Header =  React.createClass({
	render: function(){
		return( 
			<div className = "Header u-displayTable">
				<div className = "Header__container u-displayTableRow">
					<div className = "Header__container__dashBoardSection u-displayTableCell u-paddingLeftBig u-verticalAlignMiddle">
						<span className = "dashBoard dashBoard--big">Dashboard</span>
						<span className = "dashBoard dashBoard--small">Dashboard</span>
					</div>
					<div className = "Header__container__welcomeSection u-displayTableCell u-verticalAlignMiddle">
						Welcome, User
					</div>
					<div className = "Header__container__langSection u-displayTableCell u-verticalAlignMiddle">
						<select className = "form-control">
							<option className="en">English</option>
							<option className="sp">Spanish</option>
							<option className="ru">Russian</option>
						</select>
					</div>
					<div className = "Header__container__signSection u-displayTableCell u-verticalAlignMiddle">
						<button className="btn btn-default">Sign out</button>
					</div>
				</div>
			</div>
		)
	}
});

//Sidebar Component

var Sidebar = React.createClass ({
	render:function(){
		return(
			<div className="Sidebar">
				<SideBarHeader />
				<SideBarMenu />
			</div>

		)
	}
});


var SideBarHeader = React.createClass ({
	render: function(){
		return (
				<div className="Sidebar__header">
					<span className="Sidebar__header--small">THE</span>
					<span className="Sidebar__header--big">PBX</span>
				</div>
			)
	}
});

var SideBarMenu = React.createClass ({
	render: function(){
		return (
				<div className="Sidebar__menu">
					<SideBarMenuSection title = "" items={["Dashboard"]}/>
					<SideBarMenuSection title = "Subscribers and groups" items={["Subscribers", "Groups"]}/>
					<SideBarMenuSection title = "Resources" items={["Sounds"]} />
					<SideBarMenuSection title = "Routing rules" items={["Incoming channels"]} />
				</div>
		)
	}
});

var SideBarMenuSection = React.createClass({

	mixins:[logger],
	createItem: function(itemText, i) {
        return <div className="menuItem" key={i}><a href="#">{itemText}</a></div>;
     },
	render: function(){
		return(
			<div className="menuSection">
				<div className="menuSectionTitle">{this.props.title}</div>
				{this.props.items.map(this.createItem)}
			</div>
		)
	}
});

var SideBarMenuItem = React.createClass ({
	render: function(){
		return (
				<div className="menuItem">
					{this.props.title}
				</div>
		)
	}
});


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

//App Component
var App = React.createClass ({
	render: function(){
		return (
			<div>
				<Sidebar />
				<Header />
				<Main />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("pbxApp"));
