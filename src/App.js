//@flow

import React from 'react';
import {WeatherProvider} from './contexts/weatherContext';

import Router from './router';

const App = () => {
  return (
    <WeatherProvider>
      <Router />
    </WeatherProvider>
  );
};

export default App;
