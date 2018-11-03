import React from 'react';

import './WineBody.css';

const wineBody = (props) => {
	const wineType = props.wine.type ? 
		<p className='wine-type'><em>{props.wine.type}</em></p> : null;
	let wineText = (
		<p>{props.wine.name} 
		{props.wine.vineyard ? `, ${props.wine.vineyard}` : null} 
		{props.wine.year ? `, ${props.wine.year}` : null}</p>
	);
	// wineText += props.wine.vineyard ? `, ${props.wine.vineyard}`: null;
	// wineText += props.wine.year ? `, ${props.wine.year}`: null;
	return ( 
		<div className="card-body">
			{ wineType }
			{ wineText }
		</div>
	 );
}
 
export default wineBody;