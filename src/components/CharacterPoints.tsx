import React, { FC, useState } from 'react';
import './CharacterPoints.css';
import { Character } from '../model/character';
import { DiceRoller } from './DiceRoller';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    setRoute: (c: string) => void;
}

export const CharacterPoints: FC<Props> = ({ setRoute, character, setCharacter }) => {

    const [total, setTotal] = useState<number>(0);

    function onConfirm() {
        setCharacter({
            ...character,
            statsPoints: total
        });
    }

    return <div className="character-points page">

        <h1 className="page-title">Character Points</h1>

        <p>You must roll 9d10 to determine your total Character Points.</p>

        <p>Character Points are the "cash" of character creation.<br />
            You can use them to buy the various mechanics aspect of the character like good looks and a strong body.
        </p>

        <div className="separator" />

        <DiceRoller bonus={0} reroll={true} min={1} max={10} count={9} onRolled={setTotal} />

        <div className="separator" />

        {!!total && <p>You have <strong>{total}</strong> character points!</p>}

        <div className="separator" />

        <div>
            <button className="neon-button danger" onClick={() => setRoute("menu")}>Back</button>
            {!!total && <button className="neon-button" onClick={onConfirm}>Confirm</button>}
        </div>

    </div>
};
