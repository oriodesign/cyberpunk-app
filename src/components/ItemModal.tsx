import React, { FC } from "react";

import { Modal } from './Modal';
import { CharacterItem, Character } from '../model/character';
import { allItemsById } from "../data/gearData";

type Props = {
    closeModal: () => void;
    characterItem: CharacterItem;
    setCharacter: (character: Partial<Character>) => void;
    character: Partial<Character>
};

export const ItemModal: FC<Props> = ({ closeModal, characterItem, setCharacter, character }) => {

    const item = allItemsById[characterItem.itemId];

    function toggleStash() {

        const items = character.inventory!!.filter(i => i.id !== characterItem.id);

        setCharacter({
            ...character,
            inventory: [
                {
                    ...characterItem,
                    stash: !characterItem.stash
                },
                ...items
            ]
        });

        closeModal();
    }

    return <Modal>
        <h1>{item.name}</h1>
        <p>{item.description}</p>

        <div className="separator" />

        {characterItem.stash === false && <div onClick={() => toggleStash()} className="neon-button">Stash</div>}

        {characterItem.stash === true && <div onClick={() => toggleStash()} className="neon-button">Equip</div>}

        <div className="separator" />
        <div onClick={() => closeModal()} className="neon-button danger">Close</div>
    </Modal>
};