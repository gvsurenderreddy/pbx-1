var logger = require("react-logger");

//Header Component
var Header = React.createClass({
	displayName: "Header",

	render: function () {
		return React.createElement(
			"div",
			{ className: "Header u-displayTable" },
			React.createElement(
				"div",
				{ className: "Header__container u-displayTableRow" },
				React.createElement(
					"div",
					{ className: "Header__container__dashBoardSection u-displayTableCell u-paddingLeftBig u-verticalAlignMiddle" },
					React.createElement(
						"span",
						{ className: "dashBoard dashBoard--big" },
						"Dashboard"
					),
					React.createElement(
						"span",
						{ className: "dashBoard dashBoard--small" },
						"Dashboard"
					)
				),
				React.createElement(
					"div",
					{ className: "Header__container__welcomeSection u-displayTableCell u-verticalAlignMiddle" },
					"Welcome, User"
				),
				React.createElement(
					"div",
					{ className: "Header__container__langSection u-displayTableCell u-verticalAlignMiddle" },
					React.createElement(
						"select",
						{ className: "form-control" },
						React.createElement(
							"option",
							{ className: "en" },
							"English"
						),
						React.createElement(
							"option",
							{ className: "sp" },
							"Spanish"
						),
						React.createElement(
							"option",
							{ className: "ru" },
							"Russian"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "Header__container__signSection u-displayTableCell u-verticalAlignMiddle" },
					React.createElement(
						"button",
						{ className: "btn btn-default" },
						"Sign out"
					)
				)
			)
		);
	}
});

//Sidebar Component

var Sidebar = React.createClass({
	displayName: "Sidebar",

	render: function () {
		return React.createElement(
			"div",
			{ className: "Sidebar" },
			React.createElement(SideBarHeader, null),
			React.createElement(SideBarMenu, null)
		);
	}
});

var SideBarHeader = React.createClass({
	displayName: "SideBarHeader",

	render: function () {
		return React.createElement(
			"div",
			{ className: "Sidebar__header" },
			React.createElement(
				"span",
				{ className: "Sidebar__header--small" },
				"THE"
			),
			React.createElement(
				"span",
				{ className: "Sidebar__header--big" },
				"PBX"
			)
		);
	}
});

var SideBarMenu = React.createClass({
	displayName: "SideBarMenu",

	render: function () {
		return React.createElement(
			"div",
			{ className: "Sidebar__menu" },
			React.createElement(SideBarMenuSection, { title: "", items: ["Dashboard"] }),
			React.createElement(SideBarMenuSection, { title: "Subscribers and groups", items: ["Subscribers", "Groups"] }),
			React.createElement(SideBarMenuSection, { title: "Resources", items: ["Sounds"] }),
			React.createElement(SideBarMenuSection, { title: "Routing rules", items: ["Incoming channels"] })
		);
	}
});

var SideBarMenuSection = React.createClass({
	displayName: "SideBarMenuSection",


	mixins: [logger],
	createItem: function (itemText, i) {
		return React.createElement(
			"div",
			{ className: "menuItem", key: i },
			React.createElement(
				"a",
				{ href: "#" },
				itemText
			)
		);
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "menuSection" },
			React.createElement(
				"div",
				{ className: "menuSectionTitle" },
				this.props.title
			),
			this.props.items.map(this.createItem)
		);
	}
});

var SideBarMenuItem = React.createClass({
	displayName: "SideBarMenuItem",

	render: function () {
		return React.createElement(
			"div",
			{ className: "menuItem" },
			this.props.title
		);
	}
});

//Main Component
var Main = React.createClass({
	displayName: "Main",

	render: function () {
		return React.createElement(
			"div",
			{ className: "Main" },
			React.createElement(Table, null)
		);
	}
});

var Table = React.createClass({
	displayName: "Table",

	render: function () {
		return React.createElement(
			"div",
			{ className: "TableSectionWrapper" },
			React.createElement(
				"div",
				{ className: "TableSectionWrapper__tableHeader" },
				"Active Subscribers"
			),
			React.createElement(
				"table",
				{ className: "table" },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							null,
							"Extension Number"
						),
						React.createElement(
							"th",
							null,
							"SIP Address"
						),
						React.createElement(
							"th",
							null,
							"Subscriber name"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						),
						React.createElement(
							"td",
							null,
							"Bla Bla Bla"
						)
					)
				)
			)
		);
	}
});

//App Component
var App = React.createClass({
	displayName: "App",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(Sidebar, null),
			React.createElement(Header, null),
			React.createElement(Main, null)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById("pbxApp"));