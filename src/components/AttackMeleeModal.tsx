import React, { FC, useState } from 'react';

import './AttackMeleeModal.css';
import { Modal } from './Modal';
import { DiceRoller } from './DiceRoller';
import { Character } from '../model/character';
import { AttackType, meleeAttackList, meleeBtmDamageBonus } from '../model/attack';
import { Weapon } from '../model/gear';
import { diceMap } from '../model/dice';

type Props = {
    character: Partial<Character>;
    weapon: Weapon;
    setCharacter: (c: Partial<Character>) => void;
    closeModal: () => void;
}

export const AttackMeleeModal: FC<Props> = ({ closeModal, weapon, character, setCharacter }) => {

    const [attackType, setAttackType] = useState<AttackType>("strike");
    const [hitRoll, setHitRoll] = useState<number>();
    const [damageRoll, setDamageRoll] = useState<number>();

    const attackTypeDetail = meleeAttackList.find(a => a.id === attackType)!!;
    const skillValue = (character.skills as any)["melee"] || 0;
    const damageDice = diceMap[weapon.damage];
    const btmBonus = meleeBtmDamageBonus[character.statistics!!.bodyType] || 0;

    return <Modal>
        <h1>Melee Attack</h1>

        <div className="form-field">
            <label>Move</label>
            <select value={attackType} onChange={(e) => setAttackType(e.target.value as any)}>
                {meleeAttackList.map(a => <option value={a.id}>{a.name}</option>)}
            </select>
            <p>{attackTypeDetail.description}</p>
        </div>


        <h2>Hit Roll</h2>

        <p>Attacker REF ({character.statistics!!.reflexes})
            + SKILL ({skillValue})
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

        <div className="separator" />

        <h2>Damage Roll</h2>

        <p>Damage Bonus = BTM Modifier ({btmBonus})</p>

        <DiceRoller
            critical={false}
            onRolled={setDamageRoll}
            count={damageDice.count}
            reroll={true}
            min={damageDice.min}
            max={damageDice.max}
            bonus={damageDice.bonus + btmBonus} />
        {damageRoll && <p>Result: {damageRoll}</p>}

        <div className="separator" />
        <div onClick={() => closeModal()} className="neon-button danger">Close</div>

    </Modal>;
};
