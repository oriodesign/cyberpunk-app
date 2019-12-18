import React, { useState } from 'react';
import './App.css';
import { SelectRole } from './components/SelectRole';
import { Character } from './model/character';
import { Menu } from './components/Menu';
import { CharacterPoints } from './components/CharacterPoints';
import { DistributeStats } from './components/DistributeStats';
import { DistributeSkills } from './components/DistributeSkills';
import { RoleIds } from './model/role';

const App: React.FC = () => {

  const [character, setCharacter] = useState<Partial<Character>>({
    role: RoleIds.cop,
    statsPoints: 20
  });
  const [route, setRoute] = useState<string>("character-points");

  return (
    <div className="App">

      {route === "menu" && <Menu setRoute={setRoute} />}
      {route === "select-role" && <SelectRole setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "character-points" && !character.statsPoints && <CharacterPoints setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "character-points" && !!character.statsPoints && <DistributeStats setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {route === "select-skills" && !!character.statsPoints && !!character.role && <DistributeSkills setRoute={setRoute} character={character} setCharacter={setCharacter} />}
    </div>
  );
}

export default App;
