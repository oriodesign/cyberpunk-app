import React, { FC, useState } from 'react';

import './AttackMartialArtModal.css';
import { Modal } from './Modal';
import { DiceRoller } from './DiceRoller';
import { Character } from '../model/character';
import { AttackType } from '../model/attack';
import { martialAttackList, martialArtBonus, meleeBtmDamageBonus } from '../data/attackData';

type Props = {
    character: Partial<Character>;
    skill: string;
    setCharacter: (c: Partial<Character>) => void;
    closeModal: () => void;
}

export const AttackMartialArtModal: FC<Props> = ({ closeModal, skill, character, setCharacter }) => {

    const [attackType, setAttackType] = useState<AttackType>("strike");
    const [hitRoll, setHitRoll] = useState<number>();
    const attackTypeDetail = martialAttackList.find(a => a.id === attackType)!!;
    const skillValue = (character.skills as any)[skill] || 0;
    const skillAttackTypeModifier = (martialArtBonus as any)[skill] ? (martialArtBonus as any)[skill][attackType] || 0 : 0

    return <Modal>
        <h1>Martial Art Attack</h1>

        <div className="form-field">
            <label>Move</label>
            <select value={attackType} onChange={(e) => setAttackType(e.target.value as any)}>
                {martialAttackList.map(a => <option value={a.id}>{a.name}</option>)}
            </select>
            <p>{attackTypeDetail.description}</p>
        </div>


        <div className="separator" />

        <h2>Hit Roll</h2>

        <p>Attacker REF ({character.statistics!!.reflexes})
            + SKILL ({skillValue})
            + Move bonus ({skillAttackTypeModifier})
            + 1d10 <br />
            VS
            Defender REF + SKILL* + 1d10</p>

        <p>* Martial art, fencing, melee, dodge or athletic can be used depending on situation.</p>

        <DiceRoller
            critical={false}
            onRolled={setHitRoll}
            count={1}
            reroll={true}
            min={1}
            max={10}
            bonus={0} />
        {hitRoll && <p>Result: {hitRoll}</p>}

        <h2>Damage Roll</h2>

        <p>Damage Bonus = BTM Modifier ({meleeBtmDamageBonus[character.statistics!!.bodyType]})
{skill !== "brawling" && <span>+ SKILL LEVEL {skillValue}</span>}</p>

        <div className="separator" />
        <div onClick={() => closeModal()} className="neon-button danger">Close</div>

    </Modal>;
};
