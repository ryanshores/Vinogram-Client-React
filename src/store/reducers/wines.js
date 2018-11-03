import { LOAD_WINES, UPDATE_WINES } from '../actions/actionTypes'

const initState = [];

const wineReducer = (state = initState, action) => {
	switch (action.type) {
		case LOAD_WINES:
			return action.wines;
		case UPDATE_WINES:
			return state.map(wine => {
				if (wine._id === action.wine._id) {
					return action.wine
				} else {
					return wine
				}
			})
		default: 
			return state;
	}
};

export default wineReducer;