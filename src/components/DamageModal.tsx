import React, { FC, useState } from 'react';

import './DamageModal.css';
import { Modal } from './Modal';
import { Character } from '../model/character';

type Props = {
    character: Partial<Character>;
    setCharacter: (c: Partial<Character>) => void;
    closeModal: () => void;
}

export const DamageModal: FC<Props> = ({ closeModal, character, setCharacter }) => {

    const [damage, setDamage] = useState<number>(0);
    const currentDamage = character.damage || 0;

    function confirmDamage() {
        const update = currentDamage + damage;
        console.log(damage);
        setCharacter({
            ...character,
            damage: Math.max(update, 0)
        })
        closeModal();
    }

    return <Modal>
        <h1>Damage</h1>

        <div className="separator" />

        <p><strong>Limb Loss:</strong> If a character takes more than 8 points
        damage to one area with one attack the area is severed beyond recognition.
        The character must take a Death Save at Mortal 0.
        A head wound of this type to the head is immediate kill.</p>

        <p><strong>Head Hit:</strong> Damage is always doubled.</p>

        <input type="number" value={damage} onChange={e => setDamage(Number(e.target.value))} />

        <div className="separator" />

        <div className="neon-button" onClick={confirmDamage}>Confirm Damage</div>

        <div onClick={() => closeModal()} className="neon-button danger">Close</div>
    </Modal>
};
