import React, { useState, useEffect } from 'react';
import './App.css';
import { SelectRole } from './components/SelectRole';
import { Character } from './model/character';
import { CharacterPoints } from './components/CharacterPoints';
import { DistributeStats } from './components/DistributeStats';
import { DistributeSkills } from './components/DistributeSkills';
import { CharacterHome } from './components/CharacterHome';
import { SelectGear } from './components/SelectGear';
import { SelectCyber } from './components/SelectCyber';
import { CharacterList } from './components/CharacterList';

const initialListString = localStorage.getItem("character-list");
const initialList = initialListString ? JSON.parse(initialListString) : [];

const App: React.FC = () => {

  const [characterList, setCharacterList] = useState<Array<Partial<Character>>>(initialList);
  const [selectedCharacter, setSelectedCharacter] = useState<string>();
  const [route, setRoute] = useState<string>("character-list");

  const character = selectedCharacter ? characterList.find(c => c.id === selectedCharacter) : undefined;
  function setCharacter(updated: Partial<Character>) {
    setCharacterList(characterList.map(c => c.id === selectedCharacter ? updated : c));
  }

  useEffect(() => {
    localStorage.setItem("character-list", JSON.stringify(characterList));
  }, [characterList]);

  return (
    <div className="App">
      {route === "character-list" && <CharacterList setRoute={setRoute} characterList={characterList} setCharacterList={setCharacterList} setSelectedCharacter={setSelectedCharacter} />}

      {!!character && route === "menu" && <CharacterHome setCharacter={setCharacter} character={character} setRoute={setRoute} />}
      {!!character && route === "select-role" && <SelectRole setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {!!character && route === "character-points" && !character.statsPoints && <CharacterPoints setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {!!character && route === "character-points" && !!character.statsPoints && <DistributeStats setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {!!character && route === "select-skills" && !!character.statsPoints && !!character.role && <DistributeSkills setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {!!character && route === "select-gear" && <SelectGear setRoute={setRoute} character={character} setCharacter={setCharacter} />}
      {!!character && route === "select-cyberware" && <SelectCyber setRoute={setRoute} character={character} setCharacter={setCharacter} />}
    </div>
  );
}

export default App;
