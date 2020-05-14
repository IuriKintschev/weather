import React from 'react';
import {useWeatherContext} from '../../contexts/weatherContext';

import {Container, Title} from './styles';

const Home = () => {
  const weather = useWeatherContext();

  return (
    <Container>
      <Title>{weather.data}</Title>
    </Container>
  );
};

export default Home;
