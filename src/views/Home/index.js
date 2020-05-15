import React from 'react';
import {StatusBar} from 'react-native';
// import {useWeatherContext} from '../../contexts/weatherContext';

import {Container, ImageBackground, ContentView, CardCity} from './styles';

const Home = () => {
  // const weather = useWeatherContext();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <Container>
        <ImageBackground />
        <ContentView>
          <CardCity />
        </ContentView>
      </Container>
    </>
  );
};

export default Home;
