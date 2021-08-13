import React from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterToggle from '../characters/CharacterToggle';

export default function App() {
  return (
    <>
      <CharacterToggle />
      <CharacterList />
    </>
  );
}
