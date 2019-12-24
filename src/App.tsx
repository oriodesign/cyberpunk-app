import React, { useState } from 'react';
import './App.css';
import { SelectRole } from './components/SelectRole';
import { Character } from './model/character';
import { CharacterPoints } from './components/CharacterPoints';
import { DistributeStats } from './components/DistributeStats';
import { DistributeSkills } from './components/DistributeSkills';
import { CharacterHome } from './components/CharacterHome';
import { SelectGear } from './components/SelectGear';
import { SelectCyber } from './components/SelectCyber';

const App: React.FC = () => {

  const [character, setCharacter] = useState<Partial<Character>>({
    role: "solo",
    statsPoints: 18,
    cash: 1000,
    humanity: 100,
    cyberware: {
      other: []
    }
  });
  const [route, setRoute] = useState<string>("menu");

  return (
    <div className="App">
      {route === "menu" && <CharacterHome character={character} setRoute={setRoute} />}
      {route === "select-role" && <SelectRole setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "character-points" && !character.statsPoints && <CharacterPoints setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "character-points" && !!character.statsPoints && <DistributeStats setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "select-skills" && !!character.statsPoints && !!character.role && <DistributeSkills setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "select-gear" && <SelectGear setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "select-cyberware" && <SelectCyber setRoute={setRoute} character={character} setCharacter={setCharacter} />}
    </div>
  );
}

export default App;
