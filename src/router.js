import React from 'react';
import {useWeatherContext} from './contexts/weatherContext';

import Home from './views/Home';

// compoenents
import Loading from './views/components/Loading';
import Error from './views/components/Error';

const Router = () => {
  const weatherCtx = useWeatherContext();

  // set loading component
  if (weatherCtx.loading) {
    return <Loading />;
  }

  // set error component
  if (weatherCtx.error) {
    return <Error />;
  }

  return <Home />;
};

export default Router;
