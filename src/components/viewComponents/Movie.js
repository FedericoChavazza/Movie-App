import './styles.scss';
import { getWatchlist } from 'utils/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { useState } from 'react';

export function Movie({ title, date, img, icon, id, language }) {
  const watchlist = getWatchlist();
  const [loaded, setLoaded] = useState(false);

  console.log(loaded, 'soy los loading');

  return (
    <div className="Movie-container">
      {watchlist.map(value => {
        return value.id === id && <div className="Movie__bookmark"> {icon} </div>;
      })}
      {!loaded ? (
        <LazyLoadImage
          alt=""
          effect="opacity"
          src={`${process.env.REACT_APP_ORIGINAL_IMG}${img}`}
        />
      ) : (
        <div className="Movie-container--img-loading" onLoad={() => setLoaded(true)}>
          {' '}
        </div>
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
