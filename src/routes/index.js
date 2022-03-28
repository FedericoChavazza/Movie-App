import routesPaths from './routesPaths';
import { HomePage } from 'pages/Home/Homepage';

const routes = [
  {
    path: routesPaths.home,
    component: <HomePage />,
    exact: true,
  },
];

export default routes;
