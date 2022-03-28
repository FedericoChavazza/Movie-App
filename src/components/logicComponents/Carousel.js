import { Movie } from 'components/viewComponents/Movie';
import './styles.css';

export function Carousel({ mock }) {
  return (
    <div className="Carousel-container">
      {mock.map(data => (
        <Movie key={data.id} img={data.img} title={data.title} date={data.date} />
      ))}
    </div>
  );
}
