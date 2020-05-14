//@flow

import React, {createContext, useContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TypeReturnApiHead,
  getLocalInfoByLogAndLat,
} from '../services/weatherRequests';

// types data
type Data = {
  loading: Boolean,
  error: Boolean,
  weather: TypeReturnApiHead,
};

// context instance
const WeatherContext = createContext<Data>({});

// porvider context
const WeatherProvider = ({children}) => {
  //states
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [weather, setWeather] = useState<TypeReturnApiHead>({});

  useEffect(() => {
    // verify is have connection
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        const res = await getLocalInfoByLogAndLat();

        // persist date
        try {
          const jsonValue = JSON.stringify(res.data.results);
          await AsyncStorage.setItem('@weatherApp', jsonValue);

          setWeather(res.data.results);
          setLoading(false);
        } catch (e) {
          console.log('error catch set persist');
          setError(true);
        }

        // is not connected
      } else {
        try {
          const value = await AsyncStorage.getItem('@weatherApp');

          if (value !== null) {
            const valParse: TypeReturnApiHead = JSON.parse(value);

            setWeather(valParse);
            setLoading(false);
          }
        } catch (e) {
          console.log('error catch get persist');
          setError(true);
        }
      }
    });
  }, []);

  return (
    <WeatherContext.Provider value={{error, loading, weather}}>
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
