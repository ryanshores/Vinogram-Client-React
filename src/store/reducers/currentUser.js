import { SET_CURRENT_USER } from '../actions/actionTypes'

const initState = {
	isAuthenticated: false,
	user: {}
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: !!Object.keys(action.user).length,
				user: action.user
			};
		default: 
			return state;
	}
};

export default userReducer;