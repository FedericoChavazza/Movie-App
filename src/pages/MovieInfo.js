import Button from 'components/common/Button';
import { mockArrayData } from 'mock/mockData';
import './styles.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsBookmarkPlus } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useHorizontalScroll } from 'hooks/useSideScroll';
import useTranslation from 'hooks/useTranslation';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import { BiArrowBack } from 'react-icons/bi';
import { setWatchlist, getWatchlist } from 'utils/api';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Modal from 'components/modalComponent/Modal';
import { Slider } from 'components/viewComponents/Slider';

export function MovieInfo() {
  const [openModalState, setOpenModalState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const movie = mockArrayData[0];
  let movieState = useLocation()?.state;
  const history = useHistory();
  let moviesInWatchlist = getWatchlist();
  const t = useTranslation();

  const findMovieInWatchlist = id => moviesInWatchlist.find(movie => movie.id === id);

  const data = findMovieInWatchlist(movieState.movie.id);

  const [buttonState, setButtonState] = useState(!!data);

  const deleteMovieFromWatchlist = () => {
    const findMovie = findMovieInWatchlist(movieState.movie.id);

    if (findMovie !== undefined && Object.keys(findMovie).length !== 0) {
      const filterMovies = moviesInWatchlist.filter(movies => movies.id !== findMovie.id);
      setButtonState(false);
      setWatchlist(filterMovies);
    }
  };

  const addMovieToWachlist = () => {
    moviesInWatchlist = [...moviesInWatchlist, movieState.movie];
    setButtonState(true);
    setWatchlist(moviesInWatchlist);
  };

  const goBack = () => {
    history.push(routesPaths.home);
  };

  const scrollRef = useHorizontalScroll();

  const imageHandler = img => {
    setSelectedImage(img);
    setOpenModalState(true);
  };

  return (
    <div className="MovieInfo-container">
      <div className="MovieInfo__fullContainer">
        <div className="MovieInfo__info-container ">
          <Button customClass="MovieInfo__btn-back" handleClick={goBack}>
            <BiArrowBack size={20} />
          </Button>
          <div className="MovieInfo__data">
            <div className="MovieInfo-data__container">
              <div>
                <img className="MovieInfo__img" src={movie.img} alt={movie.img} />
              </div>
              <div className="MovieInfo-data___information">
                <div className="MovieInfo__title">
                  <h2>{movie.title} </h2>
                  <Button
                    handleClick={data ? deleteMovieFromWatchlist : addMovieToWachlist}
                    img={
                      buttonState ? <BsFillBookmarkFill size={17} /> : <BsBookmarkPlus size={17} />
                    }
                  >
                    {t('movieDetails.btn.add')}
                  </Button>
                </div>
                <p> {movie.description} </p>
                <div className="MovieInfo__genres">
                  {movie.genres.map(genre => {
                    return <div key={genre}> {genre} </div>;
                  })}
                </div>
                <div className="MovieInfo__rate">
                  <div className="MovieInfo__imdbRating">
                    <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.imdb')}</h4>
                    <h4 className="MovieInfo__ratingStar">
                      <AiFillStar size={25} /> {`${movie.imdbRating} /10`}
                    </h4>
                    <h5>{movie.allRates} </h5>
                  </div>
                  <div className="MovieInfo-display__rating">
                    <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.user')}</h4>
                    <h4 className="MovieInfo__ownRating">
                      <AiOutlineStar size={25} /> {t('movieDetails.btn.rate')}
                    </h4>
                  </div>
                  <div className="MovieInfo-display__rating">
                    <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.general')}</h4>
                    <div className="MovieInfo__stadisticRate">
                      <h4> {movie.popularity.showStadistic}</h4>
                      <h4> {movie.popularity.changingStadistic} </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Movie-carousel__container">
        <h2> {t('movieDetails.images')} </h2>
        <div ref={scrollRef} className="MovieInfo__extraImgs">
          {' '}
          {movie.extraImgs.map((img, index) => {
            return (
              <img
                aria-hidden="true"
                onClick={() => imageHandler(img)}
                src={img}
                alt={index}
                key={img}
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
