import { Movie } from 'components/viewComponents/Movie';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from 'hooks/useSideScroll';
import LOADER from 'imgs/loader.gif';

export function Carousel({ movies }) {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="Carousel-container">
      {movies && movies.length !== 0 ? (
        movies.map(movie => (
          <Link to={`/movie/${movie.id}`}>
            <Movie
              key={movie.id}
              img={movie.backdrop_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          </Link>
        ))
      ) : (
        <img className="Carousel__loader" src={LOADER} alt="loading..." />
      )}
    </div>
  );
}
