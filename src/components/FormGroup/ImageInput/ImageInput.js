import React from 'react';
import ImageUpload from 'react-images-upload';

import './ImageInput.css';

const imageInput = (props) => {
	return (
		<ImageUpload 
			name='image'
			withPreview={true} 
			withIcon={false} 
			buttonText='Choose Image' 
			imgExtension={['.jpeg', '.png']} 
			label={props.hasImage ? null : 'Choose a profile image'}
			singleImage={true}
			buttonClassName={props.hasImage ? 'd-none': null}
			onChange={(e) => props.change(e)}/>
	);
}
 
export default imageInput;