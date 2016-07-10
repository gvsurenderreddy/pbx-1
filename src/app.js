var logger = require("react-logger");
var Header = require("./header.js");
var Sidebar = require("./sidebar.js");

//Main Component
var Main = React.createClass({
	displayName: "Main",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(Header, null),
			React.createElement(Sidebar, null)
		);
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("pbxApp"));