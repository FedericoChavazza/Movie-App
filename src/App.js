import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import RouteFromPath from 'components/routes/RouteFromPath';
import useTranslation from 'hooks/useTranslation';

import routes from 'routes';
import 'styles/styles.scss';
import 'styles/variables.scss';
import { useEffect } from 'react';
import { setWatchlist } from 'utils/api';

function App() {
  const t = useTranslation();

  useEffect(() => {
    if (!localStorage.watchlist) {
      setWatchlist([]);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          {routes?.map(route => (
            <RouteFromPath key={`route-${route.path}`} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
