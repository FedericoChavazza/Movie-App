import './styles.scss';
import { getWatchlist } from 'utils/api';

export function Movie({ title, date, img, icon, id, language }) {
  const watchlist = getWatchlist();
  return (
    <div className="Movie-container">
      {watchlist.map(value => {
        return value.id === id && <div className="Movie__bookmark"> {icon} </div>;
      })}
      {img ? (
        <img
          className="Movie-container__img"
          src={`${process.env.REACT_APP_ORIGINAL_IMG}${img}`}
          alt="movie"
        />
      ) : (
        <div className="Movie-container--img-notfound"> </div>
      )}
      <div className="Movie-container__details">
        <p className="Movie-container__title"> {title} </p>
        <div className="Movie-container__date"> {date} </div>
        {language && (
          <div className="Movie-container__language">
            {' '}
            <h4> Language:</h4> <div> {language} </div>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
