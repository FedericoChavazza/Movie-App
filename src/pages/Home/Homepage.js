import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import Button from 'components/common/Button';
import { useState, useEffect } from 'react';
import { useLazyDiscoveryQuery, useLazyTrendingQuery, useLazyTopRatedQuery } from 'services/api';
import { mockArrayData } from 'mock/mockData';
import { buttonHomepageMap } from 'mappings/buttonHomepageMap';
import { useSelector, useDispatch } from 'react-redux';
import { setDiscover, setTrending, setTopRated } from 'state/slices/movieSlice';

export function HomePage() {
  const t = useTranslation();
  const cachingCategory = useSelector(state => state.movies.moviesData);
  const [buttonValue, setButtonValue] = useState('discover');
  const [movies, setMovies] = useState([]);
  const [discoveryTrigger, discoverData] = useLazyDiscoveryQuery();
  const [trendingTrigger, trendingData] = useLazyTrendingQuery();
  const [topRatedTrigger, topRatedData] = useLazyTopRatedQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    const triggerEndpoints = async () => {
      if (buttonValue === 'discover') {
        if (cachingCategory.discover.loaded) {
          setMovies(cachingCategory.discover.data);
        } else {
          await discoveryTrigger();
          setMovies(discoverData?.data?.results);
          dispatch(setDiscover({ loaded: true, data: discoverData?.data?.results }));
        }
      }
      if (buttonValue === 'trending') {
        if (cachingCategory.trending.loaded) {
          setMovies(cachingCategory.trending.data);
        } else {
          await trendingTrigger();
          setMovies(trendingData?.data?.results);
          dispatch(setTrending({ loaded: true, data: trendingData?.data?.results }));
        }
      }
      if (buttonValue === 'top_rated') {
        if (cachingCategory.top_rated.loaded) {
          setMovies(cachingCategory.top_rated.data);
        } else {
          await topRatedTrigger();
          setMovies(topRatedData?.data?.results);
          dispatch(setTopRated({ loaded: true, data: topRatedData?.data?.results }));
        }
        topRatedTrigger();
        setMovies(topRatedData?.data?.results);
      }
    };
    triggerEndpoints();
  }, [
    buttonValue,
    discoverData?.data?.results,
    discoveryTrigger,
    dispatch,
    topRatedData?.data?.results,
    topRatedTrigger,
    trendingData?.data?.results,
    trendingTrigger,
    cachingCategory.top_rated,
    cachingCategory.discover.loaded,
    cachingCategory.discover.data,
    cachingCategory.trending.loaded,
    cachingCategory.trending.data,
  ]);

  return (
    <div className="Homepage-container">
      <div className="Homepage-container__header"></div>{' '}
      <div className="Homepage-container__content">
        <div className="Homepage-container__carousel">
          <div className="Homepage-container__button">
            {buttonHomepageMap?.map((button, i) => (
              <Button
                key={i}
                customClass={button.value === buttonValue ? 'selected' : undefined}
                handleClick={() => setButtonValue(button.value)}
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
          <div className="Homepage-container__Watchlist-title">
            {' '}
            <h1> {t('homepage.titles.watchlist')} </h1>
            <h3> {t('homepage.titles.list')} </h3>
          </div>{' '}
          <div className="Homepage-container__carousel-container">
            {' '}
            <Carousel movies={mockArrayData} />{' '}
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
