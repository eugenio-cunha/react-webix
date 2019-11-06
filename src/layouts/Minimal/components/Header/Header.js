import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  grid-area: header;
  padding: 3px;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
`;

const Header = () => {
  return (
    <Container>
      <div>header</div>
    </Container>
  );
};

export default Header;
