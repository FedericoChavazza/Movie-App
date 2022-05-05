import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import Button from 'components/common/Button';
import { useState, useEffect } from 'react';
import { useLazyMovieFetchQuery } from 'services/api';
import { buttonHomepageMap } from 'mappings/buttonHomepageMap';
import { useSelector, useDispatch } from 'react-redux';
import { setStoreMovies } from 'state/slices/movieSlice';
import endpoints from 'constants/endpoints.js';
import { getWatchlist } from 'utils/api';
import { useHistory } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import { WatchlistCountSelect } from 'components/logicComponents/WatchlistCountSelect';

export function HomePage() {
  const t = useTranslation();
  const cachingCategory = useSelector(state => state.movies.moviesData);
  const [buttonValue, setButtonValue] = useState('discover');
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trigger] = useLazyMovieFetchQuery();
  const dispatch = useDispatch();
  const watchList = getWatchlist();
  const history = useHistory();
  const [moviesToShow, setMoviesToShow] = useState('6');

  useEffect(() => {
    (async () => {
      if (!cachingCategory[buttonValue].loaded) {
        const { data } = await trigger(endpoints[buttonValue]);
        dispatch(
          setStoreMovies({
            category: buttonValue,
            loaded: true,
            data: data?.results,
          })
        );
      }

      setMovies(cachingCategory[buttonValue].data);
    })();
    setLoader(cachingCategory[buttonValue]?.loaded);
  }, [buttonValue, cachingCategory, trigger, dispatch]);

  return (
    <div className="Homepage-container">
      <div className="Homepage-container__header"></div>{' '}
      <div className="Homepage-container__content">
        <div className="Homepage-container__carousel">
          <div className="Homepage-container__button">
            {buttonHomepageMap?.map(button => (
              <Button
                key={button.title}
                customClass={button.value === buttonValue ? 'selected' : undefined}
                handleClick={() => {
                  setButtonValue(button.value);
                }}
              >
                {' '}
                {t(button.title)}{' '}
              </Button>
            ))}
          </div>
          <div className="Homepage-container__carousel-container">
            {' '}
            <Carousel loading={loader} movies={movies} />{' '}
          </div>
          {!!watchList.length ? (
            <>
              {' '}
              <div className="Homepage-container__Watchlist-title">
                {' '}
                <div>
                  <h1> {t('homepage.titles.watchlist')} </h1>
                  <h3 aria-hidden="true" onClick={() => history.push(routesPaths.watchlistInfo)}>
                    {t('homepage.titles.list')}{' '}
                  </h3>
                </div>
                <div>
                  <WatchlistCountSelect state={moviesToShow} setState={setMoviesToShow} />{' '}
                </div>
              </div>{' '}
              <div className="Homepage-container__carousel-container">
                {' '}
                <Carousel loading={loader} movies={watchList} moviesToShow={moviesToShow} />
              </div>{' '}
            </>
          ) : null}
        </div>{' '}
      </div>
    </div>
  );
}
