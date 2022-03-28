import { mockArrayData } from 'mock/mockData';
import { Carousel } from 'components/logicComponents/Carousel';
import './styles.css';
import useTranslation from 'hooks/useTranslation';

export function HomePage() {
  const t = useTranslation();

  return (
    <div className="Homepage-container">
      <div className="Homepage-container__header"></div>{' '}
      <div className="Homepage-container__carousel">
        <div className="Homepage-container__carousel-container">
          {' '}
          <Carousel mock={mockArrayData} />{' '}
        </div>
        <div className="Homepage-container__Watchlist-title">
          {' '}
          <h1> {t('homepage.titles.watchlist')} </h1>
          <h3> {t('homepage.titles.list')} </h3>
        </div>{' '}
        <div className="Homepage-container__carousel-container">
          {' '}
          <Carousel mock={mockArrayData} />{' '}
        </div>
      </div>{' '}
    </div>
  );
}
