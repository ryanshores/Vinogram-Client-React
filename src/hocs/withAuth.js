import React, { Component } from 'react';
import { connect } from 'react-redux';

export const withAuth = (ComponentToRender) => {
	class Authenticate extends Component {
		componentDidMount() {
			if (!this.props.isAuthenticated) {
				this.props.history.push('/signin');
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.isAuthenticated) {
				this.props.history.push('/signin');
			}
		}
		render() { 
			return <ComponentToRender {...this.props} />
		}
	}	
	
	const mapStateToProps = state => ({
		isAuthenticated: state.currentUser.isAuthenticated
	})
	
	return connect(mapStateToProps)(Authenticate);
}