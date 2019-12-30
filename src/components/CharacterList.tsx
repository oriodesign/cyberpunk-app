import React, { FC, useState } from 'react';

import './CharacterList.css';
import { Character } from '../model/character';
import uuid from 'uuid/v4';

type Props = {
    characterList: Partial<Character>[];
    setSelectedCharacter: (id: string) => void;
    setCharacterList: (list: Partial<Character>[]) => void;
    setRoute: (route: string) => void;
}

export const CharacterList: FC<Props> = ({ characterList, setCharacterList, setSelectedCharacter, setRoute }) => {

    const [name, setName] = useState<string>("");

    function createCharacter() {
        if (name.trim() === "") {
            return;
        }
        setCharacterList([
            ...characterList,
            {
                id: uuid(),
                name: name.trim(),
                damage: 0,
                cyberware: {
                    other: []
                }
            }
        ]);
        setName("");
    }

    function selectCharacter(c: Partial<Character>) {
        setSelectedCharacter(c.id!!);
        setRoute("menu");
    }

    return <div className="character-list-wrapper">
        <div className="create-character-wrapper">
            <input onChange={e => setName(e.target.value)} value={name} placeholder="Name" />
            <div className="create-character-button" onClick={() => createCharacter()}>Create Character</div>
        </div>

        <div className="character-list">
            {characterList.map(c => <div
                key={c.id}
                onClick={() => selectCharacter(c)}
                className="character-list-item">{c.name}</div>)}
        </div>

    </div>
};
