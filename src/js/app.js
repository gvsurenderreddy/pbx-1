var Header = require("./header.js");
var Sidebar = require("./sidebar.js");
var Main = require("./main.js");



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
