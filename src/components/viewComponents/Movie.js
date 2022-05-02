import './styles.scss';
import { getWatchlist } from 'utils/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import BROKEN_IMG from 'imgs/broken-img.png';
import { useState } from 'react';

export function Movie({ title, date, img, icon, id, language }) {
  const watchlist = getWatchlist();

  const [showErrorImage, setShowErrorImage] = useState(false);
  return (
    <div className="Movie-container">
      {watchlist.map(value => {
        return value.id === id && <div className="Movie__bookmark"> {icon} </div>;
      })}
      {!showErrorImage ? (
        <LazyLoadImage
          alt=""
          effect="opacity"
          src={`${process.env.REACT_APP_ORIGINAL_IMG}${img}`}
          onError={() => setShowErrorImage(true)}
        />
      ) : (
        <img src={BROKEN_IMG} alt="not-found" className="Movie-container--img-notfound" />
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
