var logger = require("react-logger");
var Header = require("./header.js");
var Sidebar = require("./sidebar.js");


//Main Component
var Main = React.createClass ({
	render: function(){
		return (
			<div>
				<Header />
				<Sidebar />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById("pbxApp"));
