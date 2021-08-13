import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAirBenderCharacters } from '../services/airBenderApi';


const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('airBender');

  const apiMap = {
    airbender: fetchAirBenderCharacters,
  };

  useEffect(() => {
    apiMap[selectedApi]()
      .then(setCharacters);
  }, [selectedApi]);

  return (
    <CharacterContext.Provider value={{ characters, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};


export default CharacterProvider;
