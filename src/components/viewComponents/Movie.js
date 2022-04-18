import './styles.scss';

export function Movie({ title, date, img }) {
  return (
    <div className="Movie-container">
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
