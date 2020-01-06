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
    const isCreating = character.status === "creating";

    function publish() {
        setCharacter({
            ...character,
            status: "completed"
        })
    }

    function unpublish() {
        setCharacter({
            ...character,
            status: "creating"
        })
    }

    return <div className="character-home">
        <div className="row">
            <div className="left-col">
                <CharacterCard setCharacter={setCharacter} character={character} />

                <div className="separator" />
                {isCreating && <div onClick={() => publish()} className="neon-button">Publish Character</div>}
                {!isCreating && <div onClick={() => unpublish()} className="neon-button danger">Un-Publish Character</div>}
                <div className="separator" />
            </div>
            <div className="right-col">
                <Menu character={character} setRoute={setRoute} />
            </div>
        </div>


    </div>;
};
