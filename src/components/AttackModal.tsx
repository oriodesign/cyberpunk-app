import React, { FC, useState } from 'react';

import './AttackModal.css';
import { Modal } from './Modal';
import { DiceRoller } from './DiceRoller';
import { Character } from '../model/character';
import { Weapon } from '../model/gear';
import { diceMap } from '../model/dice';

type Props = {
    character: Partial<Character>;
    weapon: Weapon;
    setCharacter: (c: Partial<Character>) => void;
    closeModal: () => void;
}

const typeSkillMap = {
    pistol: "handgun",
    submachinegun: "submachinegun",
    rifle: "rifle",
    shotgun: "shotgun",
    heavyWeapon: "heavyWeapon",
    exotic: "exotic",
    melee: "melee"
};

const modifiersList = [
    {
        id: "fast",
        label: "Fast Draw",
        bonus: -3
    },
    {
        id: "immobile",
        label: "Target Immobile",
        bonus: 4
    },
    {
        id: "ambush",
        label: "Ambush",
        bonus: 5
    },
    {
        id: "mov10",
        label: "Moving Target REF > 10",
        bonus: -3
    },
    {
        id: "mov12",
        label: "Moving Target REF > 12",
        bonus: -4
    },
    {
        id: "mov14",
        label: "Moving Target REF > 14",
        bonus: -5
    },
    {
        id: "bodyPart",
        label: "Aimed at body part",
        bonus: -4
    },
    {
        id: "ricochet",
        label: "Ricochet",
        bonus: -5
    },
    {
        id: "blinded",
        label: "Blinded by light or dust",
        bonus: -3
    },
    {
        id: "silhoutted",
        label: "Target Silhoutted",
        bonus: 2
    },
    {
        id: "turning",
        label: "Turning to face target",
        bonus: -2
    },
    {
        id: "2weapon",
        label: "Using 2 weapons",
        bonus: -3
    },
    {
        id: "running",
        label: "Firing while running",
        bonus: -3
    },
    {
        id: "shoulder",
        label: "Firing shoulder arms from hip",
        bonus: -2
    },
    {
        id: "turret",
        label: "Turret mounted weapon",
        bonus: 2
    },
    {
        id: "vehicle",
        label: "Vehicle mounted",
        bonus: -4
    },
    {
        id: "large",
        label: "Large Target",
        bonus: 4
    },
    {
        id: "small",
        label: "Small Target",
        bonus: -4
    },
    {
        id: "tiny",
        label: "Tiny Target",
        bonus: -6
    },
    {
        id: "laserSight",
        label: "Laser Sight",
        bonus: 1
    },
    {
        id: "targetingScope",
        label: "Targeting Scope",
        bonus: 1
    },
    {
        id: "smartgun",
        label: "Smartgun",
        bonus: 2
    },
    {
        id: "smartgoggles",
        label: "Smartgoggles",
        bonus: 2
    },
];

export const AttackModal: FC<Props> = ({ closeModal, weapon, character, setCharacter }) => {
    const [distance, setDistance] = useState<number>(15);
    const [aiming, setAiming] = useState<number>(0);
    const [autoSetting, setAutoSetting] = useState<string>("no");
    const [result, setResult] = useState<number>();
    const [damage, setDamage] = useState<number>();
    const [targets, setTargets] = useState<number>(1);
    const [fireZoneWidth, setFireZoneWidth] = useState<number>(2);

    const [modifiers, setModifiers] = useState<{ [id: string]: boolean }>({});

    const ref: number = character.statistics!!.reflexes;
    const weaponSkill: number = character.skills!![typeSkillMap[weapon.type]] || 0;

    let bonus = ref + weaponSkill;

    // 3 round gives bonus at close/medium range
    if (autoSetting === "three-round-burst" && ([15, 20].includes(distance))) {
        bonus += 3;
    }

    if (autoSetting === "full-auto") {
        const bulletsPerTarget = Math.floor(weapon.rateOfFire / targets);
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

    return <Modal>
        <h1>Damage</h1>

        <div className="separator" />

        <div className="row">
            <div className="left-col">



                <div className="form-field">
                    <label>Targets</label>
                    <input type="number" value={targets} onChange={e => setTargets(Number(e.target.value))} />
                </div>

                <div className="form-field">
                    <label>Auto Settings</label>
                    <select value={autoSetting} onChange={e => setAutoSetting(e.target.value)}>
                        <option value="no">No</option>
                        <option value="full-auto">Full-Auto</option>
                        <option value="three-round-burst">Three Round Burst</option>
                        <option value="suppressive-fire">Suppressive Fire</option>
                    </select>
                </div>

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
            <DiceRoller
                critical={true}
                onRolled={setResult}
                count={1}
                reroll={true}
                min={1}
                max={10}
                bonus={bonus} />

            {result && <p>Result: {result} vs {distance}. {result >= distance ? "Success" : "Failure"}</p>}
            {autoSetting === "suppressive-fire" && <p>
                Who enters the fire zone must make a Save roll:<strong>Athletic + Ref + 1d10</strong><br />
                The difficult is number of rounds / fire zone width = {Math.floor(weapon.rateOfFire / fireZoneWidth)}<br />
                The target gets 1d6 rounds on failure.
        </p>}
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

            {damage && <p>Result: {damage}</p>}
        </div>

        <div className="separator" />


        <div onClick={() => closeModal()} className="neon-button danger">Close</div>
    </Modal>
};
