import { Route } from 'react-router-dom';
import { node } from 'prop-types';

const RouteFromPath = ({ component, ...route }) => <Route {...route}>{component}</Route>;

RouteFromPath.propTypes = {
  component: node.isRequired,
};

export default RouteFromPath;
