import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import history from './utils/history';
import './app.less';
import client from './lib/apollo-client';
import JobDetail from './pages/job/detail';
import AddJob from './pages/job/add';

const App: React.FC = () => (
  <ApolloProvider client={client}>
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/:companySlug/:jobSlug">
        <JobDetail />
      </Route>
      <Route exact path="/postJob">
        <AddJob />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
  </ApolloProvider>
);

export default App;
