import React, { FC } from 'react';
import './CharacterCard.css';
import { Character } from '../model/character';
import { rolesTitlesMap } from '../model/role';
import { statAbbr } from '../model/statistics';
import { StatValue } from './StatValue';
import { skillTitlesMap, skillStatMap } from '../model/skills';
import { allItemsById } from '../model/gear';

type Props = {
    character: Partial<Character>;
}

export const CharacterCard: FC<Props> = ({ character }) => {
    return <div className="character-card">

        <h1 className="character-card-name">{character.name}</h1>
        {character.role && <h2>{rolesTitlesMap[character.role]}</h2>}

        {character.job && <div className="character-job-money">
            {character.job && <div className="character-job">{character.job}</div>}
            {character.cash && <div className="character-money">{character.cash}$</div>}
        </div>}

        {
            character.statistics && <div className="stat-wrapper">
                {Object.keys(character.statistics).map(id => {
                    return <div className="stat-value-line">
                        <span className="stat-value-line-title">{(statAbbr as any)[id]}</span> <StatValue value={(character.statistics as any)[id]} />
                    </div>
                })}
            </div>
        }


        {
            character.skills && <div className="character-skills-wrapper">
                {Object.keys(character.skills).map(k =>
                    <div className="character-skill">
                        <div className="character-skill-name">{skillTitlesMap[k]}</div>
                        <div className="character-skill-value">+{character.skills!![k] + (character.statistics as any)[skillStatMap[k]]}</div>
                    </div>)}
            </div>
        }

        {
            character.inventory && <div className="character-inventory-wrapper">
                {character.inventory.map(item => <div key={item.id} className="character-item">
                    <div className="character-item-name">{allItemsById[item.itemId].name}</div>
                </div>)}
            </div>
        }

    </div>;
};