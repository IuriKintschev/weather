import React from 'react';
import {useWeatherContext} from '../../contexts/weatherContext';

import {Container, Title} from './styles';

const Home = () => {
  const weather = useWeatherContext();

  return (
    <Container>
      <Title>{weather.weather.city_name && weather.weather.city_name}</Title>
    </Container>
  );
};

export default Home;
