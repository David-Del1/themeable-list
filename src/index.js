import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import CharacterProvider from './state/CharacterProvider';
import { ThemeProvider } from './state/ThemeProvider';

render(
  <ThemeProvider>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
