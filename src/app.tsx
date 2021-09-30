import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import history from './utils/history';
import './app.less';

import client from './lib/apollo-client';

const App: React.FC = () => (
  <ApolloProvider client={client}>
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
  </ApolloProvider>
);

export default App;
