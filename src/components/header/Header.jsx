import React, { useState } from 'react';
import { useTheme, useToggle } from '../../state/ThemeProvider';
import styled from 'styled-components';

function Header() {
  const theme  = useTheme();
  const toggleTheme = useToggle();

  
  return (
    <HeaderStyled>
      <h1>Header</h1>
      <button onClick={toggleTheme}>Light/Dark Mode</button>
      {theme}
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.header`
  width: 100vw;
  height: 80px;
  background-color: lightblue;
`;
