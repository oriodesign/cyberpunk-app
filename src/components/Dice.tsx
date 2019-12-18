import React, { FC, useState, useRef, useEffect } from "react";

type Props = {
    min: number;
    max: number;
    onRolled: (value: number) => void;
};

const MAX_ITERATION = 100;
const MAX_FLIP = 50;

function ease(timeFraction: number) {
    return 1 - Math.sin(Math.acos(timeFraction));
}

function getRandomInt(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

export const Dice: FC<Props> = ({ min, max, onRolled }) => {

    const [value, setValue] = useState(0);
    const valueRef = useRef(0);
    const iteration = useRef(0);

    function roll() {
        if (iteration.current > MAX_ITERATION) {
            onRolled(valueRef.current);
            return;
        }

        const t = ease(iteration.current / MAX_ITERATION) * MAX_FLIP;

        setTimeout(() => {
            valueRef.current = getRandomInt(min, max);
            setValue(valueRef.current);
            iteration.current = iteration.current + 1;
            roll();
        }, t + 30);
    }

    useEffect(() => {
        roll();
        // eslint-disable-next-line
    }, []);


    return <div className="dice">{value}</div>;
};