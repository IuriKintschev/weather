import React from 'react';
import {StatusBar, FlatList} from 'react-native';
import {useWeatherContext} from '../../contexts/weatherContext';

// helpers
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
  GrigView,
  TileGrid,
  GrigLabelView,
  DateTile,
  TempGid,
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
              <DateCity>{weather.weather.date}</DateCity>
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

          <GrigView>
            <FlatList
              data={weather.weather.forecast.splice(1, 6)}
              keyExtractor={(_, index) => index.toString()}
              numColumns={3}
              renderItem={({item}) => (
                <TileGrid>
                  <LottieContainer>
                    <LottieImg
                      autoPlay={true}
                      loop={true}
                      source={getFileLottieByStatusApi(item.condition)}
                    />
                  </LottieContainer>
                  <GrigLabelView>
                    <TempGid>MAX {item.max}ºC</TempGid>
                    <TempGid>MIN {item.min}ºC</TempGid>
                    <DateTile>{item.date}</DateTile>
                  </GrigLabelView>
                </TileGrid>
              )}
            />
          </GrigView>
        </ContentView>
      </Container>
    </>
  );
};

export default Home;
