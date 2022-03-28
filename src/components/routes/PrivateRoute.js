import { bool, string, node } from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, exact = false, path }) => {
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: node.isRequired,
  path: string.isRequired,
  exact: bool,
};

export default PrivateRoute;
