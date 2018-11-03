import React from 'react';

const userComment = (props) => {
	const userText = props.comment ? <p><b>{props.username}</b> {props.comment}</p> : null;
	return ( 
		<div>
			{userText}
		</div>
	);
}
 
export default userComment;