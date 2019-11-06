import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './Routes';
import { Style } from './style';

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      <Style />
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </>
  );
};

export default App;
