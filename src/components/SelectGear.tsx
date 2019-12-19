import React, { FC } from 'react';
import './SelectGear.css';
import { Character } from '../model/character';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
}

export const SelectGear: FC<Props> = ({ character, setCharacter }) => {
    return <div className="select-gear">

        <h1>Gear</h1>

        <h2></h2>

        <div className="row">
            <div className="left-col">

            </div>
            <div className="right-col">

            </div>
        </div>
    </div>
};