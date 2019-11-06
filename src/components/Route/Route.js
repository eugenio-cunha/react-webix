import React from 'react';
import { Route as RouteReact } from 'react-router';

const Route = ({ component: Component, layout: Layout, ...rest }) => (
  <RouteReact
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default Route;
