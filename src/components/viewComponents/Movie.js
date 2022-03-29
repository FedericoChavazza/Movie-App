import './styles.scss';

export function Movie({ title, date, img }) {
  return (
    <div className="Movie-container">
      <img className="Movie-container__img" src={img} alt="movie" />
      <div className="Movie-container__details">
        <div className="Movie-container__title"> {title} </div>
        <div className="Movie-container__date"> {date} </div>
      </div>
    </div>
  );
}
