import routesPaths from './routesPaths';
import { MovieInfo } from 'pages/MovieInfo';

const routes = [
  {
    path: routesPaths.movieInfo,
    component: <MovieInfo />,
    exact: true,
  },
];

export default routes;
