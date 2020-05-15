import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';

import imgBackground from '../../assets/images/back.png';

const SIZE = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;

  background: #222;
`;

export const ImageBackground = styled.Image.attrs({
  source: imgBackground,
})`
  width: 100%;
  height: ${SIZE.height / 2.3}px;

  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
`;

export const ContentView = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: ${SIZE.height / 1.33}px;

  padding: 0 20px;
`;

export const CardCity = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;

  border-radius: 20px;

  box-shadow: 5px 5px 5px black;

  background: #444;

  border-left-width: 8px;
  border-left-color: #8844dd;
`;

export const TempView = styled.View`
  padding: 15px;

  justify-content: space-between;
`;

export const Temp = styled.Text`
  font-size: 35px;
  font-weight: bold;

  color: #f4f4f4;
`;

export const DateCity = styled.Text`
  font-size: 15px;
  font-weight: bold;

  color: rgba(255, 2555, 255, 0.6);
`;

export const CityView = styled.View`
  flex: 1;

  background: #222;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const CityContent = styled.View`
  padding: 15px;
`;

export const LottieContainer = styled.View`
  flex: 1;
  padding: 5px;
  align-items: flex-end;
`;

export const LottieImg = styled(Lottie)`
  width: 100px;
  height: 100px;
`;

export const CityLabel = styled.Text`
  font-size: 25px;
  font-weight: bold;

  color: #fff;
`;

export const DescriptionCity = styled.Text`
  font-size: 15px;
  font-weight: bold;

  color: rgba(255, 2555, 255, 0.8);
`;

export const GrigView = styled.View`
  flex: 1;
  padding: 30px 0;
`;

export const TileGrid = styled.View`
  width: ${SIZE.width / 3 - 25}px;
  height: ${SIZE.width / 2 - 25}px;

  justify-content: center;
  align-items: center;

  margin: 5px;

  background: #222;

  box-shadow: 5px 5px 5px black;

  border-radius: 10px;
`;

export const GrigLabelView = styled.View`
  padding: 10px;

  align-items: center;
  justify-content: space-between;
`;

export const DateTile = styled.Text`
  font-size: 15px;

  color: rgba(255, 2555, 255, 0.8);
`;

export const TempGid = styled.Text`
  font-size: 15px;
  font-weight: bold;

  color: #fff;
`;
