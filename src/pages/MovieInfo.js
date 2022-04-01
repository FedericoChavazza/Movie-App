import Button from 'components/common/Button';
import { mockArrayData } from 'mock/mockData';
import './styles.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useHorizontalScroll } from 'hooks/useSideScroll';
import useTranslation from 'hooks/useTranslation';
import { useHistory } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';

export function MovieInfo() {
  const mock = mockArrayData;

  const history = useHistory();

  const t = useTranslation();

  const goBack = () => {
    history.push(routesPaths.home);
  };

  const scrollRef = useHorizontalScroll();

  return (
    <div className="MovieInfo-container">
      <Button handleClick={() => goBack()}>go back</Button>
      <div className="MovieInfo__data">
        <div className="MovieInfo-data__container">
          <div>
            {' '}
            <img className="MovieInfo__img" src={mock[0].img} alt={mock[0].img} />{' '}
          </div>
          <div className="MovieInfo-data___information">
            <div className="MovieInfo__title">
              {' '}
              <h2>{mock[0].title} </h2>{' '}
              <Button img={<BsFillBookmarkFill />}> {t('movieDetails.btn')} </Button>
            </div>
            <p> {mock[0].description} </p>
            <div className="MovieInfo__genres">
              {' '}
              {mock[0]?.genres.map((genre, i) => {
                return <div key={i}> {genre} </div>;
              })}{' '}
            </div>
            <div className="MovieInfo__rate">
              {' '}
              <div className="MovieInfo__imdbRating">
                {' '}
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.imdb')}</h4>{' '}
                <h4 className="MovieInfo__ratingStar">
                  {' '}
                  <AiFillStar size={25} /> {`${mock[0].imdbRating} /10`}{' '}
                </h4>
                <h5>{mock[0].allRates} </h5>
              </div>
              <div className="MovieInfo-display__rating">
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.user')}</h4>
                <h4 className="MovieInfo__ownRating">
                  {' '}
                  <AiOutlineStar size={25} /> Rate{' '}
                </h4>
              </div>
              <div className="MovieInfo-display__rating">
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.general')}</h4>
                <div className="MovieInfo__stadisticRate">
                  {' '}
                  <h4> {mock[0].popularity.showStadistic}</h4>{' '}
                  <h4> {mock[0].popularity.changingStadistic} </h4>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Movie-carousel__container">
        <h2> {t('movieDetails.images')} </h2>
        <div ref={scrollRef} className="MovieInfo__extraImgs">
          {' '}
          {mock[0]?.extraImgs.map((img, i) => {
            return <img src={img} alt={i} key={i} />;
          })}{' '}
        </div>
      </div>
    </div>
  );
}
