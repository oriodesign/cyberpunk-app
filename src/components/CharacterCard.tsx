import React, { FC, useState } from 'react';
import './CharacterCard.css';
import { Character, deriveStats } from '../model/character';
import { rolesTitlesMap } from '../model/role';
import { statAbbr } from '../model/statistics';
import { StatValue } from './StatValue';
import { DamageBar } from './DamageBar';
import { InitiativeModal } from './InitiativeModal';
import { skillTitlesMap, skillStatMap, skillDescriptionMap } from '../model/skills';
import { allItemsById, Weapon } from '../model/gear';
import { getWeapons, getArmorEncumberance, getArmorStoppingPower, getAllCharacterCyber, getTotalGearWeight, applyModifiers } from '../repository/characterRepository';
import { allCyberById, characterCyber } from '../model/cyberware';
import { DamageModal } from './DamageModal';
import { AttackModal } from './AttackModal';

type Props = {
    character: Partial<Character>;
    setCharacter: (character: Partial<Character>) => void;
}

type FocusedItem = {
    name: string;
    description: string;
};

export const CharacterCard: FC<Props> = ({ character: baseCharacter, setCharacter }) => {

    const [openModal, setOpenModal] = useState<string>();
    const [focusedItem, setFocusedItem] = useState<FocusedItem>();
    const [focusedWeapon, setFocusedWeapon] = useState<Weapon>();
    const character = applyModifiers(baseCharacter);

    const derivedStats = character.statistics ? deriveStats(character.statistics) : undefined;
    const stoppingPower = getArmorStoppingPower(character);
    const totalWeight = getTotalGearWeight(character);

    return <div className="character-card">

        <h1 className="character-card-name">{character.name}</h1>
        {character.role && <h2>{rolesTitlesMap[character.role]}</h2>}

        {character.job && <div className="character-job-money">
            {character.job && <div className="character-job">{character.job}</div>}
            {character.cash && <div className="character-money">{character.cash}$</div>}
        </div>}

        {character.statistics && derivedStats && <div className="row">
            <div className="left-col">
                <div className="stat-wrapper">

                    {Object.keys(character.statistics).map(id => {
                        let value = (character.statistics as any)[id];
                        if (id === "reflexes") {
                            value = value - getArmorEncumberance(character);
                        }
                        return <div className="stat-value-line">
                            <span className="stat-value-line-title">{(statAbbr as any)[id]}</span> <StatValue value={value} />
                        </div>
                    })}
                    <div className="stat-value-line">
                        <span className="stat-value-line-total">{character.statsPoints} Stat Points</span>
                    </div>
                </div>

            </div>
            <div className="right-col">

                <div className="derived-stat-row">
                    <div onClick={() => setOpenModal("initiative")} className="derived-stat-main">
                        <div className="derived-stat-main-label">Initiative</div>
                        <div className="derived-stat-main-value">{derivedStats.initiative}</div>
                    </div>
                </div>

                <div className="derived-stat-row">
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Hum</div>
                        <div className="derived-stat-main-value">{character.humanity}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Btm</div>
                        <div className="derived-stat-main-value">{derivedStats.bodyTypeModifier}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Save</div>
                        <div className="derived-stat-main-value">{derivedStats.saveNumber}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Run</div>
                        <div className="derived-stat-main-value">{derivedStats.run}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Leap</div>
                        <div className="derived-stat-main-value">{derivedStats.leap}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Carry</div>
                        <div className="derived-stat-main-value">{derivedStats.carry}</div>
                    </div>
                    <div className="derived-stat-main">
                        <div className="derived-stat-main-label">Lift</div>
                        <div className="derived-stat-main-value">{derivedStats.lift}</div>
                    </div>
                </div>

                <div className="sp-part-row">
                    <div className="sp-part">
                        <div className="sp-part-label">Head</div>
                        <div className="sp-part-value">{stoppingPower.head}</div>
                    </div>
                    <div className="sp-part">
                        <div className="sp-part-label">Torso</div>
                        <div className="sp-part-value">{stoppingPower.torso}</div>
                    </div>
                    <div className="sp-part">
                        <div className="sp-part-label">R. Arm</div>
                        <div className="sp-part-value">{stoppingPower.rightArm}</div>
                    </div>
                    <div className="sp-part">
                        <div className="sp-part-label">L. Arm</div>
                        <div className="sp-part-value">{stoppingPower.leftArm}</div>
                    </div>
                    <div className="sp-part">
                        <div className="sp-part-label">R. Leg</div>
                        <div className="sp-part-value">{stoppingPower.rightLeg}</div>
                    </div>
                    <div className="sp-part">
                        <div className="sp-part-label">L. Leg</div>
                        <div className="sp-part-value">{stoppingPower.leftLeg}</div>
                    </div>
                </div>




                <div className="separator" />

            </div>
        </div>}

        <div onClick={() => setOpenModal("damage")}>
            <DamageBar damage={character.damage || 0} />
        </div>


        {
            character.skills && <div className="character-skills-wrapper">
                {Object.keys(character.skills).map(k =>
                    <div
                        onClick={() => setFocusedItem({ name: skillTitlesMap[k], description: skillDescriptionMap[k] })}
                        className="character-skill">
                        <div className="character-skill-name">{skillTitlesMap[k]}</div>
                        <div className="character-skill-value">+{character.skills!![k] + ((character.statistics as any)[skillStatMap[k]] || 0)}</div>
                    </div>)}
            </div>
        }

        {character.inventory && getWeapons(character).length > 0 && <h3>Weapons</h3>}
        {
            character.inventory && getWeapons(character).length > 0 && <table className="character-weapons-wrapper">

                <tr>
                    <th></th>
                    <th>Type</th>

                    <th>Acc.</th>
                    <th>Dmg</th>
                    <th>Ammo</th>
                    <th>Shots</th>
                    <th>Rof</th>
                    <th>Range</th>
                    <th>Rel.</th>
                </tr>



                {(getWeapons(character)).map(i => <tr
                    key={i.id}
                    onClick={() => { setFocusedWeapon(i.weapon); setOpenModal("attack"); }}
                    className="character-weapon">
                    <td className="character-weapon-name">{i.weapon.name}</td>
                    <td className="character-weapon-type">{i.weapon.type}</td>
                    <td className="character-weapon-accuracy">{i.weapon.accuracy}</td>
                    <td className="character-weapon-damage">{i.weapon.damage}</td>
                    <td className="character-weapon-ammo">{i.weapon.ammo}</td>
                    <td className="character-weapon-shots">{i.weapon.shots}</td>
                    <td className="character-weapon-rof">{i.weapon.rateOfFire}</td>
                    <td className="character-weapon-range">{i.weapon.range}</td>

                    <td className="character-weapon-reliability">{i.weapon.reliability}</td>
                </tr>)}
            </table>
        }

        {character.inventory && character.inventory.length > 0 && <h3>Inventory ({totalWeight}Kg)</h3>}
        {
            character.inventory && character.inventory.length > 0 && <div className="character-inventory-wrapper">
                {character.inventory.map(item => <div
                    onClick={() => setFocusedItem({ name: allItemsById[item.itemId].name, description: allItemsById[item.itemId].description || "" })}
                    key={item.id}
                    className="character-item">
                    <div className="character-item-name">{allItemsById[item.itemId].name}</div>
                </div>)}
            </div>
        }

        {getAllCharacterCyber(character).length > 0 && <h3>Cyberware</h3>}
        {characterCyber.map(cc => {
            const cyber = character.cyberware!! as any;

            if (!cyber[cc.id]) {
                return null;
            }

            return <div className="character-cyberware-wrapper">
                {cc.id === "other" && cyber[cc.id].length > 0 && <label>{cc.title}</label>}
                {cc.id !== "other" && <label className="cyber-installed">{cc.title} Installed</label>}
                {cyber[cc.id].map((c: string) => <div
                    onClick={() => setFocusedItem({ name: allCyberById[c].name, description: allCyberById[c].description })}
                    className="character-cyberware">
                    {allCyberById[c].name}
                </div>)}
            </div>
        })}


        {focusedItem && <div className="sidepanel">
            <h1>{focusedItem.name}</h1>
            <p>{focusedItem.description}</p>
            <button className="neon-button" onClick={() => setFocusedItem(undefined)}>Close</button>
        </div>}

        {openModal === "initiative" && <InitiativeModal character={character} closeModal={() => setOpenModal("")} />}
        {openModal === "damage" && <DamageModal character={character} setCharacter={setCharacter} closeModal={() => setOpenModal("")} />}

        {openModal === "attack" && <AttackModal setCharacter={setCharacter} character={character} weapon={focusedWeapon!!} closeModal={() => setOpenModal("")} />}
    </div>;
};