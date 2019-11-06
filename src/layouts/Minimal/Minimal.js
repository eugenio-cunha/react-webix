import React from 'react';
import styled from 'styled-components';

import { Header } from './components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: minmax(30px, 50px) auto;

  grid-template-areas:
    'header header header'
    'main main main';
  height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  padding: 3px;
  background-color: #ffffff;
`;

const Minimal = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Minimal;
