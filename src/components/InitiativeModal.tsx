import React, { FC, useState } from 'react';

import './InitiativeModal.css';
import { Modal } from './Modal';
import { Character } from '../model/character';
import { DiceRoller } from './DiceRoller';
type Props = {
    character: Partial<Character>
    closeModal: () => void;
}

export const InitiativeModal: FC<Props> = ({ closeModal, character }) => {

    const [isFast, setIsFast] = useState<boolean>(false);
    const [result, setResult] = useState<number>();

    const bonus = character.statistics!!.reflexes + (isFast ? 3 : 0);

    return <Modal>
        <h1>Initiative</h1>

        <div className="separator" />

        <div className="toggle-wrapper">
            <div className={isFast ? "toggle active" : "toggle"} onClick={() => setIsFast(!isFast)}>Fast Draw</div>
            <p>Fast Draw grants +3 on initiative and -3 to hit. <br />
                You also cannot take advantage on scope, sight or aiming.</p>

        </div>



        <div className="separator" />

        <DiceRoller
            onRolled={setResult}
            count={1}
            reroll={true}
            min={1}
            max={10}
            bonus={bonus} />

        <div className="separator" />

        {result && <p>Result: {result}</p>}

        <div onClick={() => closeModal()} className="neon-button danger">Close</div>
    </Modal>
};
