import React from 'react';
// import {useWeatherContext} from '../../contexts/weatherContext';

import {Container, ImageBackground, ContentView} from './styles';

const Home = () => {
  // const weather = useWeatherContext();

  return (
    <Container>
      <ImageBackground />
      <ContentView />
    </Container>
  );
};

export default Home;
