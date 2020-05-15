import React from 'react';
import {StatusBar} from 'react-native';

import {Container, LoadingLo} from './styles';

const Loading = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Container>
        <LoadingLo />
      </Container>
    </>
  );
};

export default Loading;
