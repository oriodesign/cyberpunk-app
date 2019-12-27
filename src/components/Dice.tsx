import React, { FC, useState, useRef, useEffect } from "react";
import { getRandomInt } from "../model/dice";

type Props = {
    min: number;
    max: number;
    onRolled: (value: number) => void;
};

const MAX_ITERATION = 15;

export const Dice: FC<Props> = ({ min, max, onRolled }) => {

    const [value, setValue] = useState(0);
    const valueRef = useRef(0);
    const iteration = useRef(0);

    function roll() {
        if (iteration.current > MAX_ITERATION) {
            onRolled(valueRef.current);
            return;
        }

        const t = iteration.current * iteration.current;

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