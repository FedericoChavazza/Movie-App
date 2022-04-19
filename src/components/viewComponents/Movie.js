import './styles.scss';
import { getWatchlist } from 'utils/api';

export function Movie({ title, date, img, icon, id }) {
  const watchlist = JSON.parse(getWatchlist());
  return (
    <div className="Movie-container">
      {watchlist.map(value => {
        return value.id === id && <div className="Movie__bookmark"> {icon} </div>;
      })}
      <img
        className="Movie-container__img"
        src={`${process.env.REACT_APP_ORIGINAL_IMG}${img}`}
        alt="movie"
      />
      <div className="Movie-container__details">
        <p className="Movie-container__title"> {title} </p>
        <div className="Movie-container__date"> {date} </div>
      </div>
    </div>
  );
}
