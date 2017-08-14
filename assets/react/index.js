import 'babel-polyfill'; // some es6 features still not in babel
import React from 'react';
import routes from './routes';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; // only used to connect react container components to redux
import configureStore from './store/index';
import { fetchPens } from './actions/pens';
import App from './components/Hello';

// creates a redux store that holds our complete app state in 1 store only, a single source of truth
// create an instance of our store
const store = configureStore();

// on intial page load, lets dispatch a
store.dispatch(fetchPens());

/*
    lets render our react component to the dom
    provider attaches to app to the store, top level component
    make the store available to all container components
    provider attaches our redux store to react components
*/
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('reacting-pens')
);
