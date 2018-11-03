import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const headerActions = (props) => {
	return ( 
		<div>
			<FontAwesomeIcon 
				style={{}}
				icon={['fas', 'ellipsis-h']} 
				onClick={props.delete}/>
		</div>
	);
}
 
export default headerActions;