import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import LoadingLottie from '../../../assets/lottie/loading.json';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #222;
`;

export const LoadingLo = styled(LottieView).attrs({
  source: LoadingLottie,
  autoPlay: true,
  loop: true,
  resizeMode: 'contain',
})`
  height: 300px;
`;
