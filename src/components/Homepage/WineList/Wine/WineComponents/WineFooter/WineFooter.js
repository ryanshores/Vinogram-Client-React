import React, { Component } from 'react';

import './WineFooter.css';

import WineActions from './FooterComponents/wineActions';
import WineLikes from './FooterComponents/wineLikes';
import UserComment from './FooterComponents/userComment';
import Comments from './FooterComponents/comments';
import CommentInput from './FooterComponents/commentInput';

class WineFooter extends Component {
	state = { 
		commenting: false
	}

	toggleCommentingHandler = () => this.setState({commenting: !this.state.commenting})

	render() { 
		return ( 
			<div className="wine-footer">
				<WineActions comment={this.toggleCommentingHandler} />
				<WineLikes likes={this.props.likes}/>
				<UserComment username={this.props.user.username} comment={this.props.comment}/>
				<Comments comments={this.props.comments}/>
				{ this.state.commenting ? 
					<CommentInput submit={this.props.submit} /> : null
				}
			</div>
		 );
	}
}
 
export default WineFooter;