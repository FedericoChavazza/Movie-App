import { Movie } from 'components/viewComponents/Movie';
import { getWatchlist } from 'utils/api';
import './styles.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import Button from 'components/common/Button';
import { useHistory } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';

export function WatchList() {
  const history = useHistory();
  const watchList = getWatchlist();
  return (
    <div>
      {' '}
      <div className="Watchlist__container">
        <div className="Watchlist__btn">
          <Button
            handleClick={() => history.push(routesPaths.home)}
            customClass="Watchlist__btn"
            img={<AiOutlineHome size={25} />}
          ></Button>
        </div>
        {watchList?.map(movie => {
          return (
            <Link
              to={{
                pathname: `/movie/${movie.id}`,
                state: {
                  movie: movie,
                },
              }}
            >
              <Movie
                watchlistBoolean={true}
                key={movie.id}
                img={movie.backdrop_path}
                title={movie.original_title}
                date={movie.release_date}
                language={movie.original_language}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
