import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

import { withAuth } from '../hocs/withAuth';
import Homepage from '../components/Homepage/Homepage';
import AuthForm from '../components/AuthForm/AuthForm';
import WineForm from '../components/WineForm/WineForm';
import UserSettings from '../components/UserProfile/UserSettings/UserSettings';

const Main = props => {
	const { authUser, removeError, error, currentUser } = props;
	return (
		<Switch>
			<Route exact path='/' render={ props => <Homepage {...props} currentUser={currentUser} /> }/>
			<Route exact path='/signin' render={ props => (
				<AuthForm 
					{...props}
					error={error}
					removeError={removeError}
					onAuth={authUser}
					buttonText="Log in.."
					heading="Welcom back." />
					) }/>
			<Route exact path='/signup' render={ props => (
				<AuthForm 
					{...props}
					error={error}
					removeError={removeError}
					onAuth={authUser}
					signUp
					buttonText="Sign me up!"
					heading="Join today." />
			) }/>
			<Route path='/add' component={withAuth(WineForm)} />
			<Route path={`/${props.currentUser.user.username}`} component={withAuth(UserSettings)} />
		</Switch>
	)
};

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	error: state.error
});
 
export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));