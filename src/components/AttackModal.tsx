import React, { FC, useState } from 'react';

import './AttackModal.css';
import { Modal } from './Modal';
import { DiceRoller } from './DiceRoller';
import { Character } from '../model/character';
import { Weapon } from '../model/gear';
import { typeSkillMap, modifiersList, bodyPartList } from '../data/attackData';
import { getFumbleLabel, calculateFinalDamage } from '../rules/combatRules';
import { getRandomInt } from '../util/math';
import { diceMap } from '../data/diceData';

type Props = {
    character: Partial<Character>;
    weapon: Weapon;
    setCharacter: (c: Partial<Character>) => void;
    closeModal: () => void;
}


export const AttackModal: FC<Props> = ({ closeModal, weapon, character, setCharacter }) => {
    const [distance, setDistance] = useState<number>(15);
    const [aiming, setAiming] = useState<number>(0);
    const [autoSetting, setAutoSetting] = useState<string>("no");
    const [bulletType, setBulletType] = useState<string>("standard");

    const [targetCover, setTargetCover] = useState<number>(0);
    const [targetBtm, setTargetBtm] = useState<number>(0);
    const [targetArmor, setTargetArmor] = useState<number>(0);

    const [result, setResult] = useState<number>();
    const [bodyPart, setBodyPart] = useState<number>();
    const [fumble, setFumble] = useState<number>();
    const [damage, setDamage] = useState<number>();
    const [targets, setTargets] = useState<number>(1);
    const [fireZoneWidth, setFireZoneWidth] = useState<number>(2);
    const [modifiers, setModifiers] = useState<{ [id: string]: boolean }>({});

    const isAutomatic = weapon.rateOfFire > 2;
    const ref: number = character.statistics!!.reflexes;
    const weaponSkill: number = character.skills!![typeSkillMap[weapon.type]] || 0;

    let bonus = ref + weaponSkill;

    // 3 round gives bonus at close/medium range
    if (autoSetting === "three-round-burst" && ([15, 20].includes(distance))) {
        bonus += 3;
    }

    const bulletsPerTarget = Math.floor(weapon.rateOfFire / targets);
    if (autoSetting === "full-auto") {
        if (distance === 15) {
            bonus += Math.floor(bulletsPerTarget / 10);
        }
        if (distance > 15) {
            bonus -= Math.floor(bulletsPerTarget / 10);
        }
    }

    modifiersList.forEach((m) => {
        if (modifiers[m.id]) {
            bonus += m.bonus;
        }
    });

    const isFumble = result ? ((result - bonus) === 1) : false;
    const fumbleLabel = fumble ? getFumbleLabel(weapon, fumble) : undefined;

    const finalDamage = damage && bodyPart ? calculateFinalDamage(damage, targetArmor, targetCover, targetBtm, bulletType, bodyPart) : null;

    return <Modal>
        <h1>Attack</h1>

        <div className="separator" />

        <div className="row">
            <div className="left-col">

                <div className="form-field">
                    <label>Auto Settings</label>
                    <select value={autoSetting} onChange={e => setAutoSetting(e.target.value)}>
                        <option value="no">No</option>
                        {isAutomatic && <option value="full-auto">Full-Auto</option>}
                        {isAutomatic && <option value="three-round-burst">Three Round Burst</option>}
                        {isAutomatic && <option value="suppressive-fire">Suppressive Fire</option>}
                    </select>
                </div>

                {autoSetting === "full-auto" && <div className="form-field">
                    <label>Targets</label>
                    <input type="number" value={targets} onChange={e => setTargets(Number(e.target.value))} />
                </div>}

                {autoSetting === "suppressive-fire" && <div className="form-field">
                    <label>Fire Zone Width</label>
                    <select value={fireZoneWidth} onChange={e => setFireZoneWidth(Number(e.target.value))}>
                        <option value={2}>2m</option>
                        <option value={3}>3m</option>
                        <option value={4}>4m</option>
                        <option value={5}>5m</option>
                        <option value={10}>10m</option>
                    </select>
                </div>}

                <div className="form-field">
                    <label>Aiming</label>
                    <select value={aiming} onChange={e => setAiming(Number(e.target.value))}>
                        <option value={0}>No</option>
                        <option value={1}>1 Round</option>
                        <option value={2}>2 Rounds</option>
                        <option value={3}>3 Rounds</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Distance</label>
                    <select value={distance} onChange={e => setDistance(Number(e.target.value))}>
                        <option value={10}>Point Blank (Up to 1m)</option>
                        <option value={15}>Close (Up to {Math.ceil(weapon.range / 4)}m)</option>
                        <option value={20}>Medium (Up to {Math.ceil(weapon.range / 2)}m)</option>
                        <option value={25}>Long (Up to {Math.ceil(weapon.range)}m)</option>
                        <option value={30}>Extreme (Up to {weapon.range * 2}m)</option>
                    </select>
                </div>

                <div className="form-field">
                    <label>Bullet Type</label>
                    <select value={aiming} onChange={e => setBulletType(e.target.value)}>
                        <option value="standard">Standard</option>
                        <option value="armor-piercing">Armor Piercing</option>
                    </select>
                </div>

            </div>
            <div className="right-col">
                <div className="form-field">
                    <label>Other modifiers</label>
                    <div className="form-field-toggles">
                        {
                            modifiersList.map(m => <div
                                key={m.id}
                                onClick={() => setModifiers({ ...modifiers, [m.id]: !modifiers[m.id] })}
                                className={modifiers[m.id] ? "toggle active" : "toggle"}>{m.label}</div>)
                        }
                    </div>

                </div>
            </div>
        </div>



        <div className="separator" />

        <div className="form-field">
            <label>Hit Roll</label>

            {autoSetting === "full-auto" && <p>You hit each target with {bulletsPerTarget} bullets. Roll for each target individually.</p>}

            <DiceRoller
                critical={true}
                onRolled={setResult}
                count={1}
                reroll={true}
                min={1}
                max={10}
                bonus={bonus} />

            {result && <p>Result: {result} vs {distance}. {result >= distance ? "Success" : "Failure"}</p>}
            {isFumble && <p>Fumble! Do a Fumble Roll!</p>}
            {result && autoSetting === "three-round-burst" && result >= distance && <p>You hit the target with {getRandomInt(1, 3)} bullets.</p>}
            {result && autoSetting === "full-auto" && result >= distance && <p>You hit the target with {result - distance} bullets.</p>}
            {autoSetting === "suppressive-fire" && <p>
                Who enters the fire zone must make a Save roll:<strong>Athletic + Ref + 1d10</strong><br />
                The difficult is number of rounds / fire zone width = {Math.floor(weapon.rateOfFire / fireZoneWidth)}<br />
                The target gets 1d6 rounds on failure.
            </p>}
        </div>

        {isFumble && <div className="form-field">
            <label>Fumble Roll</label>
            <DiceRoller
                critical={false}
                onRolled={setFumble}
                count={1}
                reroll={true}
                min={1}
                max={10}
                bonus={0} />
            {fumbleLabel && <p>Fumble Result: {fumbleLabel}</p>}
        </div>}

        <div className="form-field">
            <label>Body Part Roll</label>
            <DiceRoller
                critical={false}
                onRolled={setBodyPart}
                count={1}
                reroll={true}
                min={1}
                max={10}
                bonus={0} />
            {bodyPart && <p>Body Part: {bodyPartList[bodyPart]}</p>}
        </div>


        <div className="separator" />

        <h1>Damage</h1>

        <div className="form-field">
            <label>Target Cover</label>
            <select value={targetCover} onChange={e => setTargetCover(Number(e.target.value))}>
                <option value={0}>None</option>
                <option value={5}>Wood Door, Sheetrock Wall</option>
                <option value={10}>Concrete block Wall, Car body, Car Door</option>
                <option value={15}>Heavy Wood Door</option>
                <option value={20}>Steel Door</option>
                <option value={25}>Brick Wall, Curb, Mailbox</option>
                <option value={30}>Stone Wall, Large Tree</option>
                <option value={35}>Hydrant</option>
                <option value={40}>Armored Car body, AV-4 Body</option>
            </select>
        </div>

        {bodyPart && <div className="form-field">
            <label>Target Armor for {bodyPartList[bodyPart]}</label>
            <input type="number" value={targetArmor} onChange={e => setTargetArmor(Number(e.target.value))} />
        </div>}

        <div className="form-field">
            <label>Target Body Type Modifier</label>
            <input type="number" value={targetBtm} onChange={e => setTargetBtm(Number(e.target.value))} />
        </div>

        <div className="form-field">
            <label>Damage roll</label>
            <DiceRoller
                onRolled={setDamage}
                count={diceMap[weapon.damage].count}
                reroll={true}
                min={diceMap[weapon.damage].min}
                max={diceMap[weapon.damage].max}
                bonus={0} />

            {damage && <p>Base Roll: {damage}</p>}
            {finalDamage && <p>Damage inflicted: {finalDamage}</p>}
            {damage && damage > 8 && <p>Limb Loss: The body part is severed or crushed beyond recognition. Make a Death save at Mortal 0.</p>}

        </div>

        <div className="separator" />


        <div onClick={() => closeModal()} className="neon-button danger">Close</div>
    </Modal>
};
