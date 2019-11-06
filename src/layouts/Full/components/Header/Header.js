import React from 'react';
import styled from 'styled-components';
import { NavLink } from  'react-router-dom'

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
      <NavLink to='/home'>Home</NavLink>
      <span>&nbsp;</span>
      <NavLink to='/sign-in'>Sign-In</NavLink>
      <span>&nbsp;</span>
      <NavLink to='/about'>About</NavLink>
      
    </Container>
  );
};

export default Header;
