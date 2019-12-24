import React, { FC } from 'react';
import { BodyPartDetail } from '../model/cyberware';
import { Modal } from './Modal';
import { diceMap } from '../model/dice';
import { DiceRoller } from './DiceRoller';

type Props = {
    bodyPart: BodyPartDetail;
    humanityRoll: number;
    onHumanityRoll: (result: number) => void;
    closeModal: () => void;
}

export const BuyBodyPartModal: FC<Props> = ({ bodyPart, humanityRoll, onHumanityRoll, closeModal }) => {

    return <Modal>
        <h1>Install body part {bodyPart.menuLabel}</h1>
        <p>Cost: {bodyPart.cost}$</p>
        <p>Humanity loss: {bodyPart.humanityLoss}</p>
        <DiceRoller {...diceMap[bodyPart.humanityLoss]} reroll={false} onRolled={onHumanityRoll} />
        {humanityRoll && <p>You have lost: {humanityRoll} humanity points.</p>}

        <div className="separator" />

        <div onClick={() => closeModal()} className="neon-button">{humanityRoll ? "Done" : "Cancel"}</div>
    </Modal>
};
