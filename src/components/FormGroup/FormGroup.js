import React from 'react';
import PropTypes from 'prop-types';

/**
* @augments {Component<{	title:string.isRequired,	type:string.isRequired,	value:string.isRequired,	onChange:Function.isRequired,	disclaimer:string>}
*/

const formGroup = (props) => (
	<div className="form-group">
		<label htmlFor={props.name}>{props.title}</label>
		<input type={props.type} className="form-control" value={props.value} name={props.name} required={props.required} onChange={props.handleChange} />
		{ props.disclaimer ? <small className="form-text text-muted">{props.disclaimer}</small> : null }
	</div>
);

formGroup.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	disclaimer: PropTypes.string
}
 
export default formGroup;