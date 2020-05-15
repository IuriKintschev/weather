import React from 'react';
import {StatusBar} from 'react-native';
import {useWeatherContext} from '../../contexts/weatherContext';

// helpers
import {dateToScreen} from '../../helpers/dateToScreen';
import {getFileLottieByStatusApi} from '../../helpers/lottieNameToApiStatus';

import {
  Container,
  ImageBackground,
  ContentView,
  CardCity,
  TempView,
  Temp,
  DateCity,
  CityView,
  CityLabel,
  CityContent,
  DescriptionCity,
  LottieContainer,
  LottieImg,
} from './styles';

const Home = () => {
  // state/ hooks
  const weather = useWeatherContext();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <Container>
        <ImageBackground />
        <ContentView>
          <CardCity>
            <TempView>
              <Temp>{weather.weather.temp}ºC</Temp>
              <DateCity>{dateToScreen(weather.weather.date)}</DateCity>
            </TempView>

            <CityView>
              <LottieContainer>
                <LottieImg
                  autoPlay={true}
                  loop={true}
                  source={getFileLottieByStatusApi(
                    weather.weather.condition_slug,
                  )}
                />
              </LottieContainer>
              <CityContent>
                <CityLabel>{weather.weather.city_name}</CityLabel>
                <DescriptionCity>{weather.weather.description}</DescriptionCity>
              </CityContent>
            </CityView>
          </CardCity>
        </ContentView>
      </Container>
    </>
  );
};

export default Home;
