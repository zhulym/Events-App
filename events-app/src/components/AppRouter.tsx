import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter: FC = () => {
  const auth = true;
  return (
    auth ?
      <Switch>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        )}
        <Redirect to={RouteNames.EVENT} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        )}
        <Redirect to={RouteNames.LOGIN} />
      </Switch>
  )
};

export default AppRouter;
