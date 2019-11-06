import React from 'react';
import styled from 'styled-components';

import { Header, Footer } from './components';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: minmax(30px, 50px) auto minmax(30px, 40px);

  grid-template-areas:
    'header header header'
    'main main main'
    'footer footer footer';
  height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  padding: 3px;
  background-color: #ffffff;
`;

const Full = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Full;
