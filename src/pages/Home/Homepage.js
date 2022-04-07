import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import Button from 'components/common/Button';
import { useState, useEffect } from 'react';
import { useLazyDiscoveryQuery, useLazyTrendingQuery, useLazyTopRatedQuery } from 'services/api';
import { mockArrayData } from 'mock/mockData';
import { buttonHomepageMap } from 'mappings/buttonHomepageMap';

export function HomePage() {
  const t = useTranslation();

  const [buttonValue, setButtonValue] = useState('discover');
  const [movies, setMovies] = useState([]);
  const [discoveryTrigger, discoverData] = useLazyDiscoveryQuery();
  const [trendingTrigger, trendingData] = useLazyTrendingQuery();
  const [topRatedTrigger, topRatedData] = useLazyTopRatedQuery();

  useEffect(() => {
    if (buttonValue === 'discover') {
      discoveryTrigger();
      setMovies(discoverData?.data?.results);
    }
    if (buttonValue === 'trending') {
      trendingTrigger();
      setMovies(trendingData?.data?.results);
    }
    if (buttonValue === 'top_rated') {
      topRatedTrigger();
      setMovies(topRatedData?.data?.results);
    }
  }, [
    buttonValue,
    discoverData?.data?.results,
    trendingData?.data?.results,
    topRatedData?.data?.results,
    discoveryTrigger,
    trendingTrigger,
    topRatedTrigger,
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
