import React, { useState } from 'react';
import './App.css';
import { SelectRole } from './components/SelectRole';
import { Character } from './model/character';
import { Menu } from './components/Menu';
import { CharacterPoints } from './components/CharacterPoints';

const App: React.FC = () => {

  const [character, setCharacter] = useState<Partial<Character>>({});
  const [route, setRoute] = useState<string>("menu");

  return (
    <div className="App">

      {route === "menu" && <Menu setRoute={setRoute} />}
      {route === "select-role" && <SelectRole setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "character-points" && <CharacterPoints setRoute={setRoute} character={character} setCharacter={setCharacter} />}
    </div>
  );
}

export default App;
