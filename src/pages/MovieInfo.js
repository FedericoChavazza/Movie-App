/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/common/Button';
import { mockArrayData } from 'mock/mockData';
import './styles.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useHorizontalScroll } from 'hooks/useSideScroll';
import useTranslation from 'hooks/useTranslation';
import { useHistory, useParams } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import Modal from 'components/modalComponent/Modal';
import { useState } from 'react';
import { Slider } from 'components/viewComponents/Slider';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { rating } from 'mappings/rateMovieInfoMap';
import ClickOutside from 'components/wrappers/ClickAwaitWrapper';
import { useMovieRateMutation, useGetUserRatedMoviesQuery } from 'services/api';
import { getGuestSession } from 'utils/api';
import { useEffect } from 'react';

export function MovieInfo() {
  const [openModalState, setOpenModalState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [openTooltipRate, setOpenTooltipRate] = useState(false);
  const movie = mockArrayData[0];
  const movieId = parseInt(useParams().id);
  const [movieRate] = useMovieRateMutation();
  const { data, refetch } = useGetUserRatedMoviesQuery();
  const session = getGuestSession();
  const history = useHistory();
  const t = useTranslation();
  const [ratingState, setRatingState] = useState('');

  useEffect(() => {
    const ratedMovie = data?.results.find(movies => movies.id === movieId);
    setRatingState(ratedMovie?.rating);
  }, [data]);

  const goBack = () => {
    history.push(routesPaths.home);
  };

  const scrollRef = useHorizontalScroll();

  const imageHandler = img => {
    setSelectedImage(img);
    setOpenModalState(true);
  };

  const ratingMovie = rate => {
    const ratingInfo = {
      movieId,
      rate,
      session,
    };

    movieRate(ratingInfo)
      .unwrap()
      .then(() => refetch(), setRatingState(rate));
  };

  return (
    <div className="MovieInfo-container">
      <Button handleClick={goBack}>
        <IoReturnUpBackOutline size={20} />
      </Button>
      <div className="MovieInfo__data">
        <div className="MovieInfo-data__container">
          <div>
            <img className="MovieInfo__img" src={movie.img} alt={movie.img} />{' '}
          </div>
          <div className="MovieInfo-data___information">
            <div className="MovieInfo__title">
              <h2>{movie.title} </h2>{' '}
              <Button img={<BsFillBookmarkFill />}> {t('movieDetails.btn.add')} </Button>
            </div>
            <p> {movie.description} </p>
            <div className="MovieInfo__genres">
              {movie?.genres.map((genre, i) => {
                return <div key={i}> {genre} </div>;
              })}{' '}
            </div>
            <div className="MovieInfo__rate">
              <div className="MovieInfo__imdbRating">
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.imdb')}</h4>{' '}
                <h4 className="MovieInfo__ratingStar">
                  <AiFillStar size={25} /> {`${movie.imdbRating} /10`}{' '}
                </h4>
                <h5>{movie.allRates} </h5>
              </div>
              <div className="MovieInfo-display__rating">
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.user')}</h4>
                <h4 className="MovieInfo__ownRating">
                  {openTooltipRate && (
                    <ClickOutside onClick={() => setOpenTooltipRate(false)}>
                      <div className="MovieInfo__onwRating-rate">
                        <fieldset className="rate">
                          {rating.map(rates => {
                            return (
                              <>
                                <input
                                  onClick={() => ratingMovie(rates.input.value)}
                                  {...rates.input}
                                ></input>{' '}
                                <label {...rates.label}> </label>
                              </>
                            );
                          })}
                        </fieldset>
                      </div>
                    </ClickOutside>
                  )}
                  {ratingState ? (
                    <div
                      onKeyDown={() => setOpenTooltipRate(!openTooltipRate)}
                      role="button"
                      tabIndex="0"
                      onClick={() => setOpenTooltipRate(!openTooltipRate)}
                      className="MovieInfo_ratingInfo"
                    >
                      <AiFillStar size={25} />
                      <span className="MovieInfo_ratingValue"> {ratingState && ratingState} </span>
                    </div>
                  ) : (
                    <div
                      onKeyDown={() => setOpenTooltipRate(!openTooltipRate)}
                      role="button"
                      tabIndex="0"
                      onClick={() => setOpenTooltipRate(!openTooltipRate)}
                    >
                      <AiOutlineStar size={25} />
                    </div>
                  )}
                  Rate{' '}
                </h4>
              </div>
              <div className="MovieInfo-display__rating">
                <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.general')}</h4>
                <div className="MovieInfo__stadisticRate">
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
          {movie?.extraImgs.map((img, i) => {
            return (
              <img aria-hidden="true" onClick={() => imageHandler(img)} src={img} alt={i} key={i} />
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
