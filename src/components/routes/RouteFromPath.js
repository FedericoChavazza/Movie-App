import { Route } from 'react-router-dom';
import { node } from 'prop-types';
import { HeaderWrap } from 'components/Wrappers/HeaderWrapper';

const RouteFromPath = ({ component, ...route }) => (
  <Route {...route}> {route.header ? <HeaderWrap> {component} </HeaderWrap> : component}</Route>
);

RouteFromPath.propTypes = {
  component: node.isRequired,
};

export default RouteFromPath;
