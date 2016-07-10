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
