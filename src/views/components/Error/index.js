import React from 'react';
import {StatusBar} from 'react-native';

import {Container, ErrorLot} from './styles';

const Error = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Container>
        <ErrorLot />
      </Container>
    </>
  );
};

export default Error;
