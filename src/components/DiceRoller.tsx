import React, { FC, useState, useEffect } from 'react';
import './DiceRoller.css';
import { Dice } from './Dice';
import { getRandomInt } from '../util/math';

type Props = {
    count: number;
    min: number;
    max: number;
    bonus: number;
    reroll: boolean;
    onRolled: (result: number) => void;
    critical?: boolean;
}

export const DiceRoller: FC<Props> = ({ count, min, max, onRolled, bonus, reroll, critical }) => {

    const [areRolling, setAreRolling] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [criticalValue, setCriticalValue] = useState(0);
    const [results, setResults] = useState(Array(count).fill(0));

    useEffect(() => {
        if (min === max) {
            onRolled(min);
        }
        // eslint-disable-next-line
    }, []);

    if (min === max) {
        return null;
    }

    function onDieRolled(index: number, value: number) {
        results[index] = value;

        if (results.every(r => r !== 0)) {
            const total = results.reduce((acc, curr) => acc + curr, 0);
            setCompleted(true);

            const criticalValue = critical && total === 10 ? getRandomInt(1, 10) : 0;
            setCriticalValue(criticalValue);
            onRolled(total + bonus + criticalValue)
        }
    }

    function reRoll() {
        onRolled(0);
        setResults(Array(count).fill(0));
        setAreRolling(false);
        setCompleted(false);
        setCriticalValue(0);
        setTimeout(() => setAreRolling(true), 10);
    }

    return <div className="dice-roller">
        {
            areRolling && results.map((d, i) => <Dice key={i} min={min} max={max} onRolled={v => onDieRolled(i, v)} />)
        }
        {criticalValue !== 0 && <div key="critical" className="dice critical">{criticalValue}</div>}
        {!areRolling && <button className="roll-button" onClick={() => setAreRolling(true)}>Roll {count}d{max}{bonus !== 0 && "+" + bonus}!</button>}
        {completed && reroll && <button className="roll-button" onClick={reRoll}>Roll Again  {count}d{max}!</button>}

    </div>
};
