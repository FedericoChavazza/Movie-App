import { Switch, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import RouteFromPath from 'components/routes/RouteFromPath';
import useTranslation from 'hooks/useTranslation';
import { useGuestSessionIdQuery } from 'services/api';
import { useEffect } from 'react';

import routes from 'routes';
import 'styles/styles.scss';
import 'styles/variables.scss';
import { setGuestSession, getGuestSession } from 'utils/api';

function App() {
  const t = useTranslation();
  const { data } = useGuestSessionIdQuery();

  useEffect(() => {
    const userSession = getGuestSession();
    if (!userSession && data) {
      setGuestSession(data.guest_session_id);
    }
  }, [data]);

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
