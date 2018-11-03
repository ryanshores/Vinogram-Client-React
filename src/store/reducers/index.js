// Root reducers
import { combineReducers } from 'redux';

import currentUser from './currentUser';
import error from './errors';
import wines from './wines';

const rootReducer = combineReducers({
	currentUser,
	wines,
	error
});

export default rootReducer;