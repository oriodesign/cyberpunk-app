import React, { FC } from 'react';
import './CharacterCard.css';
import { Character } from '../model/character';
import { rolesTitlesMap } from '../model/role';
import { statAbbr } from '../model/statistics';
import { StatValue } from './StatValue';

type Props = {
    character: Partial<Character>;
}

export const CharacterCard: FC<Props> = ({ character }) => {
    return <div className="character-card">
        {character.role && <p><strong>Role: </strong>{rolesTitlesMap[character.role]}</p>}

        {character.statistics && Object.keys(character.statistics).map(id => {
            return <div className="stat-value-line">
                <span className="stat-value-line-title">{(statAbbr as any)[id]}</span> <StatValue value={(character.statistics as any)[id]} />
            </div>
        })}
    </div>;
};