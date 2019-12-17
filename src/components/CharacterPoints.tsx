import React, { FC } from 'react';
import './CharacterPoints.css';
import { Character } from '../model/character';
import { DiceRoller } from './DiceRoller';
type Props = {
    character: Partial<Character>;
    setCharacter: (c: Character) => void;
    setRoute: (c: string) => void;
}

export const CharacterPoints: FC<Props> = ({ setRoute }) => {

    function onRolled(result: number) {

    }

    return <div className="character-points page">

        <h1 className="page-title">Character Points</h1>

        <DiceRoller sides={10} count={9} onRolled={onRolled} />
        <button className="neon-button" onClick={() => setRoute("menu")}>Back</button>
    </div>
};
