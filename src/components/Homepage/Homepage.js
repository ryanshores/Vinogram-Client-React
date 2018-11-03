// Module imports
import React from 'react';

import './Homepage.css';

import Landing from './Landing/Landing';
import WineList from './WineList/WineList';


const homepage = ({ currentUser }) => {
	return (
		<div className='homepage'>
			{
				currentUser.isAuthenticated ?
				<WineList /> :
				<Landing />
			}
		</div>
	)
};
 
export default homepage;