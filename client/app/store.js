import React from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import PeopleReducer from './components/people/reducers/reducers';
import PeopleContainer from './components/people/components/PeopleContainer';


const init = () => {
  const client = new ApolloClient();
  const middleware = [
    client.middleware(),
    promiseMiddleware(),
    thunk
  ];
  const store = createStore(
    combineReducers({
      people: PeopleReducer,
      routing: routerReducer,
      apollo: client.reducer()
    }),
    compose(
      applyMiddleware(...middleware),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  );

  const history = syncHistoryWithStore(browserHistory, store);

  render(
    <ApolloProvider client={client} store={store}>
      <Router history={history}>
        <Route path='/' component={PeopleContainer} />
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  );
};

init();
