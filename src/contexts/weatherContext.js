import React, {createContext, useContext} from 'react';
// import {getLocalInfoByLongAndLat} from '../services/weatherRequests';

// context instance
const WeatherContext = createContext({data: ''});

// porvider context
const WeatherProvider = ({children}) => {
  return (
    <WeatherContext.Provider value={{data: 'Hello World'}}>
      {children}
    </WeatherContext.Provider>
  );
};

// useContext to new hook use
const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  return context;
};

// exports
export {useWeatherContext, WeatherProvider};
