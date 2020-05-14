//@flow

import React, {createContext, useContext, useState, useEffect} from 'react';
import GetLocation from 'react-native-get-location';
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

type Location = {
  latitude: Number,
  longitude: Number,
};

// context instance
const WeatherContext = createContext<Data>({});

// porvider context
const WeatherProvider = ({children}) => {
  //states
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [weather, setWeather] = useState<TypeReturnApiHead>({});

  // on init app
  useEffect(() => {
    // verify is have connection
    NetInfo.fetch().then(async state => {
      // is connected
      if (state.isConnected) {
        // get current Ponsition
        const location: Location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        });

        if (location === null) {
          setError(true);
          return;
        }

        const res = await getLocalInfoByLogAndLat(
          location.latitude,
          location.longitude,
        );

        // persist date
        try {
          const jsonValue = JSON.stringify(res.data.results);
          await AsyncStorage.setItem('@weatherApp', jsonValue);

          // set data and status
          setWeather(res.data.results);
          setLoading(false);
        } catch (e) {
          setError(true);
        }

        // is not connected
      } else {
        // get data on persist
        try {
          const value = await AsyncStorage.getItem('@weatherApp');

          if (value !== null) {
            const valParse: TypeReturnApiHead = JSON.parse(value);

            // set data and status
            setWeather(valParse);
            setLoading(false);
          } else {
            setError(true);
          }
        } catch (e) {
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
