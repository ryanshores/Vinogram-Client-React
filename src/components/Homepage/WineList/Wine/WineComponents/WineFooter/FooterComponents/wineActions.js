import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WineActions extends Component {
	state = {
		liked: false
	}
	
	likeWineHandler = () => {
		// connect to redux and send a like post
		this.setState({liked: true})
	}

	render() { 
		const { liked } = this.state;
		return ( 
			<div className="">
				<div className="d-inline mr-3">
					<FontAwesomeIcon 
						style={liked ? {color: 'red'} : {color: 'black'}}
						classes='mr-3' 
						icon={[liked ? 'fas' : 'far', 'heart']} 
						onClick={this.likeWineHandler}/>
				</div>
				<div className="d-inline">
					<FontAwesomeIcon 
						icon={['far','comment']}
						onClick={this.props.comment} />
				</div>
			</div>
		 );
	}
}
 
export default WineActions;