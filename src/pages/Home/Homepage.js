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

export function HomePage() {
  const t = useTranslation();
  const cachingCategory = useSelector(state => state.movies.moviesData);
  const [buttonValue, setButtonValue] = useState('discover');
  const [movies, setMovies] = useState([]);
  const [trigger, moviesData] = useLazyMovieFetchQuery();
  const dispatch = useDispatch();
  const watchList = JSON.parse(getWatchlist());

  useEffect(() => {
    (async () => {
      if (!cachingCategory[buttonValue].loaded) {
        await trigger(endpoints[buttonValue]);
        dispatch(
          setStoreMovies({
            category: buttonValue,
            loaded: true,
            data: moviesData?.data?.results,
          })
        );
      }
      setMovies(cachingCategory[buttonValue].data);
    })();
  }, [buttonValue, cachingCategory, dispatch, moviesData?.data?.results, trigger]);

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
            <Carousel movies={movies} />{' '}
          </div>
          {watchList !== null && watchList.length !== 0 ? (
            <>
              {' '}
              <div className="Homepage-container__Watchlist-title">
                {' '}
                <h1> {t('homepage.titles.watchlist')} </h1>
                <h3> {t('homepage.titles.list')} </h3>
              </div>{' '}
              <div className="Homepage-container__carousel-container">
                {' '}
                <Carousel movies={watchList} />
              </div>{' '}
            </>
          ) : null}
        </div>{' '}
      </div>
    </div>
  );
}
