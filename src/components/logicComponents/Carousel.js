import { Movie } from 'components/viewComponents/Movie';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from 'hooks/useSideScroll';
import LOADER from 'imgs/loader.gif';
import { BsFillBookmarkFill } from 'react-icons/bs';

export function Carousel({ movies, isLoading }) {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="Carousel-container">

      {!!movies?.length ? (
        movies.map(movie => {
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
                icon={<BsFillBookmarkFill size={20} />}
                key={movie.id}
                img={movie.backdrop_path}
                title={movie.original_title}
                date={movie.release_date}
                id={movie.id}
              />
            </Link>
          );
        })
      ) : (
        <img className="Carousel__loader" src={LOADER} alt="loading..." />
      )}
    </div>
  );
}
