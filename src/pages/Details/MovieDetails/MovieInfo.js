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
import { setWatchlist, getWatchlist } from 'utils/api';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useState } from 'react';
import Modal from 'components/modalComponent/Modal';
import { Slider } from 'components/viewComponents/Slider';
import { useImdbRatingQuery } from 'services/imdbApi';

import { useMovieDetailQuery, useImageMovieDetailQuery } from 'services/api';
import { BiArrowBack } from 'react-icons/bi';

export function MovieInfo() {
  const [openModalState, setOpenModalState] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageInArray, setImageInArray] = useState('');
  const movie = mockArrayData[0];
  const paramId = useParams().id;
  const { data: movieData } = useMovieDetailQuery(paramId);
  const { data: imageData } = useImageMovieDetailQuery(paramId);
  let movieState = useLocation()?.state;
  const history = useHistory();
  let moviesInWatchlist = getWatchlist();
  const t = useTranslation();
  const { data: imdbRatings } = useImdbRatingQuery(movieData?.imdb_id);

  const findMovieInWatchlist = id => moviesInWatchlist.find(movie => movie.id === id);

  const data = findMovieInWatchlist(movieState?.movie.id);

  const [buttonState, setButtonState] = useState(!!data);

  const deleteMovieFromWatchlist = () => {
    const findMovie = findMovieInWatchlist(movieState?.movie.id);

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
    const imageUrl = `${process.env.REACT_APP_ORIGINAL_IMG}${img}`;
    setImageInArray(img);
    setSelectedImage(imageUrl);
    setOpenModalState(true);
  };

  return (
    <div className="MovieInfo-container">
      <div className="MovieInfo-data__holeContainer">
        <Button customClass="MovieInfo__btn" handleClick={goBack}>
          <BiArrowBack size={25} />
        </Button>
        <div className="MovieInfo__data">
          <div className="MovieInfo-data__container">
            <div>
              {' '}
              <img
                className="MovieInfo__img"
                src={`${process.env.REACT_APP_ORIGINAL_IMG}${movieData?.backdrop_path}`}
                alt={movieData?.original_title}
              />{' '}
            </div>
            <div className="MovieInfo-data___information">
              <div className="MovieInfo__title">
                {' '}
                <h2>{movieData?.original_title} </h2>{' '}
                <Button
                  handleClick={data ? deleteMovieFromWatchlist : addMovieToWachlist}
                  img={
                    buttonState ? <BsFillBookmarkFill size={17} /> : <BsBookmarkPlus size={17} />
                  }
                >
                  {t('movieDetails.btn.add')}
                </Button>
              </div>
              <p> {imdbRatings?.plot} </p>
              <div className="MovieInfo__genres">
                {' '}
                {movieData?.genres.map((genre, i) => {
                  return <div key={i}> {genre.name} </div>;
                })}{' '}
              </div>
              <div className="MovieInfo__rate">
                {' '}
                <div className="MovieInfo__imdbRating">
                  {' '}
                  <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.imdb')}</h4>{' '}
                  <h4 className="MovieInfo__ratingStar">
                    {' '}
                    <AiFillStar size={25} />
                    {`${imdbRatings?.imDbRating || t('movieDetails.loading')} /10`}{' '}
                  </h4>
                  <h5>
                    {imdbRatings?.imDbRatingVotes?.slice(0, 2) || t('movieDetails.loading')}k{' '}
                  </h5>
                </div>
                <div className="MovieInfo-display__rating">
                  <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.user')}</h4>
                  <h4 className="MovieInfo__ownRating">
                    {' '}
                    <AiOutlineStar size={25} /> {t('movieDetails.btn.rate')}{' '}
                  </h4>
                </div>
                <div className="MovieInfo-display__rating">
                  <h4 className="MovieInfo-rating__title">{t('movieDetails.ratings.general')}</h4>
                  <div className="MovieInfo__stadisticRate">
                    {' '}
                    <h4> {movieData?.vote_average}</h4>
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
            {imageData?.backdrops.map((img, i) => {
              return (
                <img
                  aria-hidden="true"
                  onClick={() => imageHandler(img.file_path)}
                  src={`${process.env.REACT_APP_ORIGINAL_IMG}${img.file_path}`}
                  alt={i}
                  key={i}
                />
              );
            })}{' '}
          </div>
        </div>
        {openModalState && (
          <Modal show={openModalState} onClose={() => setOpenModalState(false)}>
            <Slider imgIndex={imageInArray} imgArray={imageData?.backdrops} img={selectedImage} />
          </Modal>
        )}
      </div>
    </div>
  );
}
