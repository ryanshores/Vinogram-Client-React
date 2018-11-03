import React from 'react';
import { Link } from 'react-router-dom';

const landingPage = () => (
	<div className="jumbotron">
		<h1 className="display-4">What's happening</h1>
		<p className="lead">Welcome to the show!</p>
		<p>
			<Link to="/signup" className="btn btn-primary">Sign Up Here!</Link>
		</p>
	</div>
)
 
export default landingPage;