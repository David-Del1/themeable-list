import React from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterToggle from '../characters/CharacterToggle';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <Header />
      <CharacterToggle />
      <CharacterList />
    </>
  );
}
