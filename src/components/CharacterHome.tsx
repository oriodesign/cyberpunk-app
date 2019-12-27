import React, { FC } from 'react';
import './CharacterHome.css';
import { Character } from '../model/character';
import { CharacterCard } from './CharacterCard';
import { Menu } from './Menu';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (route: string) => void;
}

export const CharacterHome: FC<Props> = ({ character, setRoute, setCharacter }) => {
    return <div className="character-home">
        <div className="row">
            <div className="left-col">
                <CharacterCard setCharacter={setCharacter} character={character} />
            </div>
            <div className="right-col">
                <Menu character={character} setRoute={setRoute} />
            </div>
        </div>


    </div>;
};
