import React, { FC } from 'react';
import './Menu.css';
import { MenuItem } from './MenuItem';
import { Character } from '../model/character';

type Props = {
    setRoute: (route: string) => void;
    character: Partial<Character>
}

export const Menu: FC<Props> = ({ setRoute, character }) => {

    const isSkillsDisabled = !character.statistics;

    return <div className="menu">
        <div className="menu-inner">

            <MenuItem disabled={false} title="Role" route="select-role" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem disabled={false} title="Character Points" route="character-points" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem disabled={isSkillsDisabled} title="Skills" route="select-skills" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem disabled={true} title="Gear" route="select-gear" setRoute={setRoute} />
            <div className="menu-item-separator"></div>

            <MenuItem disabled={true} title="Cyberware" route="select-cyberware" setRoute={setRoute} />
            <div className="menu-item-separator"></div>
        </div>
    </div>
};
