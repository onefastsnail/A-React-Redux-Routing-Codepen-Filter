import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Hello from './components/Hello';
import PensHome from './components/Pens/Home';
import PensApi from './components/Pens/Api';
import DevHome from './components/Dev/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PensHome} />
        <Route path="api" component={PensApi} />
        <Route path="dev" component={DevHome} />
        <Route path="/pen/:id/:name" component={Hello} />
    </Route>
);
