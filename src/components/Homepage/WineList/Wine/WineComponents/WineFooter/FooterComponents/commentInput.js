import React, { Component } from 'react';

class CommentInput extends Component {
	state = { 
		comment: ''
	}

	handleInputChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleFormSubmit = event => {
		event.preventDefault();
		this.props.submit(this.state.comment)
	}

	render() { 
		return (
			<form className="d-flex" onSubmit={this.handleFormSubmit}>
				<div className="form-group mr-3 mb-2">
					<input 
						type="text" 
						name="comment" 
						className="form-control" 
						value={this.state.comment} 
						onChange={this.handleInputChange}/>
				</div>
				<button type="submit" className="btn btn-primary mb-2">Post</button>
			</form>
		);
	}
}
 
export default CommentInput;