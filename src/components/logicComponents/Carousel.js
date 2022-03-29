import { Movie } from 'components/viewComponents/Movie';
import './styles.scss';

export function Carousel({ movies }) {
  return (
    <div className="Carousel-container">
      {movies.map(movie => (
        <Movie key={movie.id} img={movie.img} title={movie.title} date={movie.date} />
      ))}
    </div>
  );
}
