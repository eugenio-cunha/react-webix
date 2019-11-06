import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Route } from './components';
import { Full, Minimal } from './layouts';

import { Home, About, NotFound, SignIn } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route layout={Full} component={Home} exact path="/home" />
      <Route layout={Full} component={About} exact path="/about" />
      <Route layout={Full} component={SignIn} exact path="/sign-in" />

      <Route layout={Minimal} component={NotFound} exact path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
