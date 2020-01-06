import React, { FC } from 'react';

import './Modal.css';
import { Modal } from './Modal';
import { Cyberware } from '../model/cyberware';
import { DiceRoller } from './DiceRoller';
import { diceMap } from '../data/diceData';

type Props = {
    cyberware: Cyberware;
    humanityRoll: number;
    onHumanityRollForCyberware: (result: number) => void;
    closeModal: () => void;
}

export const BuyCyberwareModal: FC<Props> = ({ cyberware, humanityRoll, onHumanityRollForCyberware, closeModal }) => {

    return <Modal>
        <h1>Install Cyberware {cyberware.name}</h1>
        <p>Cost: {cyberware.cost}$</p>
        <p>Humanity loss: {cyberware.humanityLoss}</p>
        <DiceRoller {...diceMap[cyberware.humanityLoss]} reroll={false} onRolled={onHumanityRollForCyberware} />
        {humanityRoll && <p>You have lost: {humanityRoll} humanity points.</p>}

        <div className="separator" />

        <div onClick={() => closeModal()} className="neon-button">{humanityRoll ? "Done" : "Cancel"}</div>
    </Modal>
};
