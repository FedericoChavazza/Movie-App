import routesPaths from './routesPaths';
import { MovieInfo } from 'pages/MovieInfo';
import { HomePage } from 'pages/Home/Homepage';

const routes = [
  {
    path: routesPaths.movieInfo,
    component: <MovieInfo />,
  },
  {
    path: routesPaths.home,
    component: <HomePage />,
    exact: true,
  },
];

export default routes;
