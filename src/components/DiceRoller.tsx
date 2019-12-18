import React, { FC, useState } from 'react';
import './DiceRoller.css';
import { Dice } from './Dice';

type Props = {
    count: number;
    min: number;
    max: number;
    onRolled: (result: number) => void;
}

export const DiceRoller: FC<Props> = ({ count, min, max, onRolled }) => {

    const [areRolling, setAreRolling] = useState(false);
    const [results] = useState(Array(count).fill(0));

    function onDieRolled(index: number, value: number) {
        results[index] = value;

        if (results.every(r => r !== 0)) {
            const total = results.reduce((acc, curr) => acc + curr, 0);
            onRolled(total)
        }
    }

    return <div className="dice-roller">
        {
            areRolling && results.map((d, i) => <Dice key={i} min={min} max={max} onRolled={v => onDieRolled(i, v)} />)
        }
        {!areRolling && <button className="neon-button" onClick={() => setAreRolling(true)}>Roll!</button>}


    </div>
};
