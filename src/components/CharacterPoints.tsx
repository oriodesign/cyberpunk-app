import React, { FC, useState } from 'react';
import './CharacterPoints.css';
import { Character, CharacterStatistics } from '../model/character';
import { statisticsList } from '../model/statistics';
import { DiceRoller } from './DiceRoller';
import { StatBar } from './StatBar';



type Props = {
    character: Partial<Character>;
    setCharacter: (c: Character) => void;
    setRoute: (c: string) => void;
}

export const CharacterPoints: FC<Props> = ({ setRoute, character, setCharacter }) => {

    const [total, setTotal] = useState<number>(0);
    const [statistics, setStatistics] = useState<CharacterStatistics>({
        intelligence: 0,
        reflexes: 0,
        cool: 0,
        technicalAbility: 0,
        luck: 0,
        attractiveness: 0,
        movementAllowance: 0,
        empathy: 0,
        bodyType: 0,
    });


    const usedPoints = statisticsList.reduce((acc, curr) => (statistics as any)[curr.id] + acc, 0);
    const pointsAvailable = total - usedPoints;

    function onRolled(result: number) {
        setTotal(result);
    }

    function onStatChange(id: string, value: number) {
        setStatistics({
            ...statistics,
            [id]: value
        });
    }

    return <div className="character-points page">

        <h1 className="page-title">Character Points</h1>

        <DiceRoller min={1} max={10} count={9} onRolled={onRolled} />

        {!!total && <p>Result: <span>{total}</span> Available: <span>{pointsAvailable}</span></p>}

        {!!total && <div className="stat-section">
            {statisticsList.map(s => <StatBar
                onChange={(value) => onStatChange(s.id, value)}
                id={s.id}
                title={s.title}
                value={(statistics as any)[s.id]}
                pool={pointsAvailable} />)}
        </div>}

        <div className="separator" />

        <button className="neon-button" onClick={() => setRoute("menu")}>Back</button>
    </div>
};
