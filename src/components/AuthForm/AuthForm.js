import React, { Component } from 'react';
import { connect } from 'react-redux'

import FormGroup from '../FormGroup/FormGroup';

class AuthForm extends Component {
	state = { 
		name: "",
		username: "",
		email: "",
		password: "",
		profileImage: [],
		hasImage: false
	}

	handleSubmit = event => {
		event.preventDefault();
		const authType = this.props.signUp ? 'signup' : 'signin';
		const userData = {
			name: this.state.name,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			profileImage: this.state.profileImage[0],
		}
		console.log(userData);
		this.props.onAuth(authType, userData)
			.then(() => {
				if (this.props.currentUser.isAuthenticated) {
					this.props.history.push('/');
				}
			})
			.catch(() => {});
	};

	handleChange = event => (
		this.setState({[event.target.name]: event.target.value})
	);

	handleImageChange = picture => {
		console.log(picture);
		this.setState({profileImage: picture})
	}

	render() { 
		const { name, username, email, password } = this.state;
		const { history, heading, buttonText, signUp, error, removeError } = this.props;

		const signUpForms = signUp ? (
			<div>
				<FormGroup required title='Name' name='name' type='text' value={name} handleChange={this.handleChange} />
				<FormGroup required title='Username' name='username' type='text' value={username} handleChange={this.handleChange} />
				<input type="file" name='textfile'/>
			</div>
		) : null;

		const errorMessage = error.message ? (
			<div className="alert alert-danger">{error.message}</div>
		) : null;

		history.listen(() => removeError());

		return ( 
			<div>
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errorMessage}
							<FormGroup required title='Email' name='email' type='email' value={email} handleChange={this.handleChange} disclaimer='test discliamer'/>
							<FormGroup required title='Password' name='password' type='password' value={password} handleChange={this.handleChange} />
							{signUpForms}
							<button className="btn btn-primary btn-block mt-3">{buttonText}</button>
						</form>
					</div>
				</div>
			</div>
		 );
	}
}
const mapStateToProps = state => {
	return ({
		currentUser: state.currentUser
	})
};
 
export default connect(mapStateToProps)(AuthForm);