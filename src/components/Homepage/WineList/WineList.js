import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWines, removeWine } from '../../../store/actions/wines';
import { postNewComment } from '../../../store/actions/comments';

import Wine from './Wine/Wine';


class WineList extends Component {
	componentDidMount() {
		this.props.getWines(this.props.currentUser.user.id);
	};

	addCommentHandler = (comment, wineid) => {
		this.props.postNewComment(comment, wineid);
	}

	render() { 
		const  { wines, removeWine, currentUser } = this.props;
		const wineList = wines.map(
			wine => <Wine 
				key={wine._id} 
				wine={wine} 
				currentUser={currentUser.user}
				submit={comment => this.addCommentHandler(comment, wine._id)} 
				delete={() => removeWine(wine._id)} />);
		return (
			<div>
				{ wineList }
			</div>
		);
	};
};

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	wines: state.wines
})
 
export default connect(mapStateToProps, { getWines, removeWine, postNewComment })(WineList);