import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import PeopleReducer from './components/people/reducers';
import MainComponent from './components/people/PeopleComponent';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    global: PeopleReducer,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={MainComponent}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

