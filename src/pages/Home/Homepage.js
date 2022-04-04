import { Carousel } from 'components/logicComponents/Carousel';
import './styles.scss';
import useTranslation from 'hooks/useTranslation';
import Button from 'components/common/Button';
import { useState } from 'react';

import { mockArrayData } from 'mock/mockData';

export function HomePage() {
  const t = useTranslation();
  const [buttonValue, setButtonValue] = useState('discover');

  return (
    <div className="Homepage-container">
      <div className="Homepage-container__header"></div>{' '}
      <div className="Homepage-container__content">
        <div className="Homepage-container__carousel">
          <div className="Homepage-container__button">
            {' '}
            <Button handleClick={() => setButtonValue('trending')}>
              {t('homepage.navBar.trending')}
            </Button>
            <Button handleClick={() => setButtonValue('discover')}>
              {t('homepage.navBar.discover')}
            </Button>
            <Button handleClick={() => setButtonValue('top_rated')}>
              {t('homepage.navBar.top_rated')}
            </Button>{' '}
          </div>
          <div className="Homepage-container__carousel-container">
            {' '}
            <Carousel movies={mockArrayData.filter(e => e.topic === buttonValue)} />{' '}
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
