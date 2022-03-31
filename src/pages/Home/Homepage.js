import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import { useDiscoverQuery } from 'services/api';

export function HomePage() {
  const t = useTranslation();

  const { data } = useDiscoverQuery();

  return (
    <div className="Homepage-container">
      <div className="Homepage-container__header"></div>{' '}
      <div className="Homepage-container__carousel">
        <div className="Homepage-container__carousel-container">
          {' '}
          <Carousel movies={data?.results} />{' '}
        </div>
        <div className="Homepage-container__Watchlist-title">
          {' '}
          <h1> {t('homepage.titles.watchlist')} </h1>
          <h3> {t('homepage.titles.list')} </h3>
        </div>{' '}
        <div className="Homepage-container__carousel-container">
          {' '}
          <Carousel movies={data?.results} />{' '}
        </div>
      </div>{' '}
    </div>
  );
}
