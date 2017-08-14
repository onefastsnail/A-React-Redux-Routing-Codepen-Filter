import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// using this at the entry point of our app
export default function configureStore(initalState){

    // initalState would be useful if server side rendering

	return createStore(
		rootReducer,
		initalState,
		applyMiddleware(thunk, reduxImmutableStateInvariant())
	);
}
