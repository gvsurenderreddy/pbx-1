//Header Component
class Header extends React.Component{
	render(){
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
}



//SideBarComponent
class Sidebar extends React.Component {
	render(){
		return(
			<div className="Sidebar">
				<SideBarHeader />
				<SideBarMenu />
			</div>

		)
	}
}


class SideBarHeader extends React.Component {
	render(){
		return (
				<div className="Sidebar__header">
					<span className="Sidebar__header--small">THE</span>
					<span className="Sidebar__header--big">PBX</span>
				</div>
			)
	}
}

class SideBarMenu extends React.Component {
	render(){
		return (
				<div className="Sidebar__menu">
					<SideBarMenuItem title="Dashboard" />
					<SideBarMenuSection title="Subscribers and groups" items={["Subscribers", "Groups"]}/>
				</div>
		)
	}
}

class SideBarMenuSection extends React.Component{
	createItem(itemText) {
        return <div className="menuItem">{itemText}</div>;
     };
	render(){
		return(
			<div>
				<div>{this.props.title}</div>
				{this.props.items.map(this.createItem)}
			</div>
		)
	}
}

class SideBarMenuItem extends React.Component {
	render(){
		return (
				<div className="menuItem">
					{this.props.title}
				</div>
		)
	}
}


//Main Component
class Main extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<Sidebar />
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("pbxApp"));
