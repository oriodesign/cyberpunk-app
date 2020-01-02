import React, { FC, useEffect, useState } from 'react';

import './StatModal.css';
import { Modal } from './Modal';
import { Character } from '../model/character';
import { statById } from '../model/statistics';
import { DiceRoller } from './DiceRoller';

type Props = {
    character: Partial<Character>;
    stat: string;
    closeModal: () => void;
}

export const StatModal: FC<Props> = ({ character, stat, closeModal }) => {
    const [result, setResult] = useState<number>();
    const statDetail = statById[stat];
    const value: number = (character.statistics as any)[stat];

    return <Modal>
        <h1>{statDetail.title} {value}</h1>
        <p>{statDetail.description}</p>

        <DiceRoller onRolled={setResult} min={1} max={10} bonus={value} reroll={true} count={1} />

        {result && <p>Result: {result}</p>}

        <div className="separator" />
        <div className="neon-button danger" onClick={() => closeModal()}>Close</div>
    </Modal>
};
