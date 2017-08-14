import {combineReducers} from 'redux';
import pens from './pens.js';

// this helps split our reducing functions into separate functions, each managing independent parts/branches of the state.
// use a nice name as we use this reference in our mapStateToProps calls
const rootReducer = combineReducers({
	pens
});

export default rootReducer;
