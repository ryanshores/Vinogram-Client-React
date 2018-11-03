import { apiCall } from '../../services/api';
import { UPDATE_WINES } from './actionTypes';

export const updateWine = wine => ({
	type: UPDATE_WINES,
	wine
})

export const postNewComment = (comment, wineid) => (dispatch, getState) => {
	const {currentUser} = getState();
	const userid = currentUser.user.id;
	return apiCall('post', `/api/user/${userid}/comment/${wineid}`, {comment})
		.then(response => {
			dispatch(updateWine(response));
		})
		.catch(error => console.log(error));
}