import routesPaths from './routesPaths';
import { MovieInfo } from 'pages/Details/MovieDetails/MovieInfo';
import { HomePage } from 'pages/Home/Homepage';
import { WatchList } from 'pages/Details/WatchlistDetails/Watchlist';

const routes = [
  {
    path: routesPaths.movieInfo,
    component: <MovieInfo />,
  },
  {
    path: routesPaths.home,
    component: <HomePage />,
    exact: true,
    header: true,
  },
  {
    path: routesPaths.watchlistInfo,
    component: <WatchList />,
    exact: true,
    header: true,
  },
];

export default routes;
