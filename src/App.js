//@flow

import React from 'react';
import {WeatherProvider} from './contexts/weatherContext';

import Home from './views/Home';

const App = () => {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
};

export default App;
