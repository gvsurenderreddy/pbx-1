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

module.exports= Header;