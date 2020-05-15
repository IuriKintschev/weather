import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import errorLottie from '../../../assets/lottie/error-404.json';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #222;
`;

export const ErrorLot = styled(LottieView).attrs({
  source: errorLottie,
  autoPlay: true,
  loop: false,
  resizeMode: 'contain',
})`
  height: 400px;
`;
