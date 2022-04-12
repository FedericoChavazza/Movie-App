import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import Button from 'components/common/Button';
import { useState, useEffect } from 'react';
import { useDiscoveryQuery } from 'services/api';
import { useTrendingQuery } from 'services/api';
import { useTopRatedQuery } from 'services/api';
import { setCategories } from 'utils/api';
import { getCategories } from 'utils/api';
import { buttonHomepageMap } from 'mappings/buttonHomepageMap';
import { getWatchlist } from 'utils/api';
import { useHistory } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';

export function HomePage() {
  const t = useTranslation();
  const history = useHistory();

  const category = getCategories();

  const [buttonValue, setButtonValue] = useState(category || 'discover');
  const [movies, setMovies] = useState([]);
  const { data: discoveryData } = useDiscoveryQuery();
  const { data: trendingData } = useTrendingQuery();
  const { data: topRatedData } = useTopRatedQuery();

  useEffect(() => {
    setCategories(buttonValue);
    if (buttonValue === 'discover') {
      setMovies(discoveryData?.results);
    }
    if (buttonValue === 'trending') {
      setMovies(trendingData?.results);
    }
    if (buttonValue === 'top_rated') {
      setMovies(topRatedData?.results);
    }
  }, [buttonValue, discoveryData, trendingData, topRatedData]);

  const watchList = JSON.parse(getWatchlist());

  return (
    <div className="Homepage-container__content">
      <div className="Homepage-container__carousel">
        <div className="Homepage-container__button">
          {buttonHomepageMap?.map((button, i) => (
            <Button
              key={i}
              customClass={category === button.value ? 'selected' : undefined}
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
        {watchList !== null && watchList.length !== 0 ? (
          <>
            {' '}
            <div className="Homepage-container__Watchlist-title">
              {' '}
              <h1> {t('homepage.titles.watchlist')} </h1>
              <h3 aria-hidden="true" onClick={() => history.push(routesPaths.watchlistInfo)}>
                {' '}
                {t('homepage.titles.list')}{' '}
              </h3>
            </div>{' '}
            <div className="Homepage-container__carousel-container">
              {' '}
              <Carousel movies={watchList} />
            </div>{' '}
          </>
        ) : null}
      </div>{' '}
    </div>
  );
}
