import { apiCall } from '../../services/api';
import { addError } from './errors'
import { LOAD_WINES } from './actionTypes'

export const loadWines = wines => ({
	type: LOAD_WINES,
	wines
})

export const getWines = (userid) => (dispatch, getState) => {
	const {currentUser} = getState();
	const id = currentUser.user.id;
	return apiCall('get', `/api/${id}/wines`)
		.then(response => dispatch(loadWines(response.wines)))
		.catch(error => dispatch(addError(error)))
};

export const postNewWine = wine => (dispatch, getState) => {
	const {currentUser} = getState();
	const id = currentUser.user.id;
	return apiCall('post', `/api/user/${id}/wine`, wine)
		.then(response => {
			console.log("Post wine response: ", response);
		})
		.catch(error => {
			console.log("Post wine error: ", error);
			dispatch(addError(error));
		});
};

export const removeWine = wineid => (dispatch, getState) => {
	const { currentUser } = getState();
	const id = currentUser.user.id;
	return apiCall('delete', `/api/user/${id}/wine/${wineid}`)
		.then(() => {})
		.catch(error => dispatch(addError(error)));
}