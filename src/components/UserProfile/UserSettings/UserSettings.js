import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSettings extends Component {
	state = {  }
	componentDidMount() {
		console.log(this.props);
		// send call to server for user information
		// display user information on page
		// allow user to edit information
		// send updated information to server
		// upon successful update do something
	}
	render() { 
		return (
			<div>
				<h2>Settings</h2>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    currentUser: state.currentUser.user
});
 
export default connect(mapStateToProps, null)(UserSettings);