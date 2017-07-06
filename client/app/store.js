import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import PeopleReducer from './components/people/reducers/reducers';
import PeopleComponent from './components/people/components/PeopleComponent';

const init = () => {

  const store = createStore(
    combineReducers({
      people: PeopleReducer,
      routing: routerReducer
    }),
    applyMiddleware(thunk)
  );

  const history = syncHistoryWithStore(browserHistory, store);

  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={PeopleComponent}>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );

}

init();
