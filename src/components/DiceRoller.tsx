import React, { FC, useState, useRef } from 'react';
import './DiceRoller.css';

type Props = {
    count: number;
    sides: number;
    onRolled: (result: number) => void;
}

function getRandomInt(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

const MAX_ITERATION = 100;

function ease(timeFraction: number) {
    return 1 - Math.sin(Math.acos(timeFraction));
}

export const DiceRoller: FC<Props> = ({ count, sides, onRolled }) => {

    const [dice, setDice] = useState(Array(count).fill(0));
    const iteration = useRef(0);


    function roll() {
        if (iteration.current > MAX_ITERATION) {
            onRolled(1);
            iteration.current = 0;
            return;
        }

        const t = ease(iteration.current / 100) * 500;

        setTimeout(() => {
            setDice(dice.map((d, i) => {
                if (i > iteration.current) {
                    return d;
                }

                return getRandomInt(1, sides)
            }));
            iteration.current = iteration.current + 1;
            roll();
        }, t + 30);
    }

    return <div className="dice-roller">
        {
            dice.map((d, i) => <div key={i} className="dice">{d}</div>)
        }
        {iteration.current === 0 && <button className="neon-button" onClick={() => roll()}>Roll!</button>}
    </div>
};
