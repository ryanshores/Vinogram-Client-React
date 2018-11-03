import React from 'react';

const commentList = (props) => {
	const comments = props.comments.map(comment => (
		<p key={comment._id}><b>{comment.user.username}</b> {comment.text}</p>
	))
	return ( 
		<div className='comments'>
			{comments}
		</div>
	 );
}
 
export default commentList;