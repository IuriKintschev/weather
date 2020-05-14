import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

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
  height: ${SIZE.height / 2.5}px;

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

export const Title = styled.Text`
  font-size: 18px;
`;
