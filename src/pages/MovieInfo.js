import Button from 'components/common/Button';
import { mockArrayData } from 'mock/mockData';
import './styles.css';

export function MovieInfo() {
  const mock = mockArrayData;

  return (
    <div className="MovieInfo-container">
      <div className="MovieInfo__data">
        <div className="MovieInfo-data__container">
          <div>
            {' '}
            <img className="MovieInfo__img" src={mock[0].img} alt={mock[0].img} />{' '}
          </div>
          <div className="MovieInfo-data___information">
            <div className="MovieInfo__title">
              {' '}
              <h2>{mock[0].title} </h2> <Button>Add to watchList</Button>
            </div>
            <div> {mock[0].description} </div>
            <div className="MovieInfo__genres">
              {' '}
              {mock[0]?.genres.map((genre, i) => {
                return <div key={i}> {genre} </div>;
              })}{' '}
            </div>
            <div> IMDB DESCRIPTION </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        {mock[0]?.extraImgs.map((img, i) => {
          return <img src={img} alt={i} key={i} />;
        })}{' '}
      </div>
    </div>
  );
}
