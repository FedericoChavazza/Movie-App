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
import Modal from 'components/modalComponent/Modal';
import { useState } from 'react';
import { Slider } from 'components/viewComponents/Slider';

export function MovieInfo() {
  const [openModalState, setOpenModalState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const movie = mockArrayData[0];

  const history = useHistory();

  const t = useTranslation();

  const goBack = () => {
    history.push(routesPaths.home);
  };

  const scrollRef = useHorizontalScroll();

  const imageHandler = (e, img) => {
    setSelectedImage(img);
    setOpenModalState(true);
  };

  return (
    <div className="MovieInfo-container">
      <Button handleClick={() => goBack()}>{t('movieDetails.btn.back')}</Button>
      <div className="MovieInfo__data">
        <div className="MovieInfo-data__container">
          <div>
            {' '}
            <img className="MovieInfo__img" src={movie.img} alt={movie.img} />{' '}
          </div>
          <div className="MovieInfo-data___information">
            <div className="MovieInfo__title">
              {' '}
              <h2>{movie.title} </h2>{' '}
              <Button img={<BsFillBookmarkFill />}> {t('movieDetails.btn.add')} </Button>
            </div>
            <p> {movie.description} </p>
            <div className="MovieInfo__genres">
              {' '}
              {movie?.genres.map((genre, i) => {
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
                  <AiFillStar size={25} /> {`${movie.imdbRating} /10`}{' '}
                </h4>
                <h5>{movie.allRates} </h5>
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
                  <h4> {movie.popularity.showStadistic}</h4>{' '}
                  <h4> {movie.popularity.changingStadistic} </h4>
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
          {movie?.extraImgs.map((img, i) => {
            return (
              <img
                aria-hidden="true"
                onClick={() => imageHandler(null, img)}
                src={img}
                alt={i}
                key={i}
              />
            );
          })}{' '}
        </div>
      </div>
      {openModalState && (
        <Modal show={openModalState} onClose={() => setOpenModalState(false)}>
          <Slider imgArray={movie?.extraImgs} img={selectedImage} />
        </Modal>
      )}
    </div>
  );
}
