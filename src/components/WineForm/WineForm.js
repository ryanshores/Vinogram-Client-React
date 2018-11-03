import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postNewWine } from '../../store/actions/wines';
 
import FormGroup from '../FormGroup/FormGroup';

class wineForm extends Component {
	state = { 
		name: '',
		vineyard: null,
		comment: null,
		// rating: null,
		type: null,
		year: null,
		loading: false
	}

	handleChange = event => {
		this.setState( { [event.target.name]: event.target.value } );
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({loading: true})
		const wine = { 
			name: this.state.name,
			vineyard: this.state.vineyard,
			comment: this.state.comment,
			type: this.state.type,
			year: this.state.year,
		};
		this.props.postNewWine(wine);
		setTimeout(() => {
			this.props.history.push('/');
		}, 1000);
	}

	render() { 
		if (this.state.loading) {
			return (
				<h2>Loading...</h2>
			)
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<h1>What wine are you drinking?</h1>
					<FormGroup name='name' type='text' title='Name' value={this.state.name} handleChange={this.handleChange} />
					<FormGroup name='vineyard' type='text' title='Vineyard' value={this.state.vineyard} handleChange={this.handleChange} />
					<FormGroup name='type' type='text' title='Type' value={this.state.type} handleChange={this.handleChange} />
					<FormGroup name='year' type='number' title='Year' value={this.state.year} handleChange={this.handleChange} />
					<FormGroup name='comment' type='text' title='Comment' value={this.state.comment} handleChange={this.handleChange} />
					{/* <FormGroup name='rating' type='number' title='Rating' value={this.state.rating} handleChange={this.handleChange} /> */}
					<button className="btn btn-primary btn-block mt-3">Submit</button>
				</form>
			);
		}
	}
}
 
export default connect(null, { postNewWine })(wineForm);