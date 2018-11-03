import React from 'react';

import './Wine.css'

import WineHeader from './WineComponents/WineHeader/WineHeader';
import WineBody from './WineComponents/WineBody/WineBody';
import WineFooter from './WineComponents/WineFooter/WineFooter';

const Wine = (props) => {
	const { user, comment, comments, likes } = props.wine;
	const currentUser = props.currentUser;

	const wine = {
		name: props.wine.name,
		vineyard: props.wine.vineyard,
		type: props.wine.type,
		year: props.wine.year
	};

	console.log({currentUser, user})

	return ( 
		<div className="wine-card">
			<WineHeader user={user} owner={currentUser.id === user._id} delete={props.delete}/>
			<WineBody wine={wine}/>
			<WineFooter user={user} comment={comment} comments={comments} likes={likes} submit={props.submit}/>
		</div>
	);
}
 
export default Wine;