import axios from 'axios';

export const setTokenHeader = token => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authlorization'];
	}
};

const config = {
	headers: {
	  'Content-Type': 'multipart/form-data'
	}
};

export const apiCall = (method, url, data) => {
	return new Promise((resolve, reject) => {
		return axios({method, url, data, config})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => reject(err.response.data.error))
	})
};