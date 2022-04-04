import { Movie } from 'components/viewComponents/Movie';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from 'hooks/useSideScroll';

export function Carousel({ movies }) {
  console.log(movies);
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} className="Carousel-container">
      {movies?.map(movie => (
        <Link to={`/movie/${movie.id}`}>
          <Movie key={movie.id} img={movie.img} title={movie.title} date={movie.date} />
        </Link>
      ))}
    </div>
  );
}
