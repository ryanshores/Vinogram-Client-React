import React from 'react';

import './WineHeader.css'
import HeaderActions from './HeaderActions/HeaderActions';

const wineHeader = (props) => {
	return ( 
		<div className="wine-header">
			<div className='user-image-container'>
				<img className='user-image' src="https://seattlesportsnet.files.wordpress.com/2016/08/twitteregg.jpeg?w=512&h=&zoom=2" alt="user-profile"/>
			</div>
			<div className="user-name">
				<b>{props.user.username}</b>
			</div>
			{ props.owner ?
				<HeaderActions delete={props.delete}/> : null
			}
		</div>
	 );
}
 
export default wineHeader;